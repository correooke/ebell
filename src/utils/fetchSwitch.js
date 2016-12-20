import axios from "axios";

export default function(createUrl, url, args) {
    if (true) {
        return getRealResult(createUrl, url, args);
    } else {
        return new Promise(function(resolve) {
            window.setTimeout(
                () => {
                    resolve(getMockResult(createUrl, url, args));
                }, Math.random() * 3000 + 2000);
        });
    }
};


const wrapResult = (result) => ({
    ok: true,
    status: 200,
    headers: {
        get: () => 'application/json',
    },
    data: result, 
    json() {
        return new Promise(resolve => resolve(result));
    },
});

const getMockResult = (createUrl, url, args) => {

    const matcher = mock.find(x => x.match.test(url));
    const result = matcher ? matcher.result(args) : undefined;

    console.log("RESULT: " + url + ": " + result);
    return wrapResult(result);
};

const getRealResult = (createUrl, url, args) => {
    const matcher = real.find(x => x.match.test(url));
    const fetchpromise = matcher ? matcher.result(createUrl, url, args) : undefined;
    return fetchpromise();
};

const encodeData = (data) => {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
};

const myFetch = axios;

const real = [
    {
        match: /user/,
        result: (createUrl, url, args) => () => {
            return myFetch(createUrl('token'), {
                method: 'POST',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${args.nick}&password=${args.pass}`,
            });
        }

    },
    {
        match: /message/, 
        result: (createUrl, url, args) => () => {
            return myFetch.post(createUrl('events'), args);
        }
    },
    {
        match: /sites/,
        result: (createUrl, url, args) => () => {
            return myFetch.get(createUrl('sites?TenantID=1'));
        }
    },
    {
        match: /tenant/,
        result: (createUrl, url, args) => () => {
            return myFetch.get(createUrl('tenant/1'));
        }
    },
    {
        match: /events/,
        result: (createUrl, url, args) => () => {
            let url = createUrl(`events?${encodeData(args)}`);
            return myFetch.get(url);
        }
    },
    {
        match: /attend_event/,
        result: (createUrl, url, args) => () => {
            return myFetch.delete(createUrl(`events/${args}`));
        }
    },
    {
        match: /tableverify/,
        result: (createUrl, url, args) => () => {
            return myFetch.post(createUrl('sites'), { SecurityCode: args } );
        }
    }

];



const mock = [
    {
        match: /user/,
        result: () => ({
            token_auth: '600211053',
            name: 'Emiliano',
            nick: 'Oke'
        })
    },
    {
        match: /message/,
        result: () => ({ result: 'ok'})
    },
    {
        match: /sites/,
        result: () => (
            {
                itemname: 'status',
                type: 'master',
                actions: ['search', ],
                collist: ['ESTADO', 'MESA', 'MOZO', ],
                coltypes: ['status', 'txt', 'txt', 'check',],
                rowlist: [
                    ['red', '01', 'Juan Martinez', 'checked', ],
                ],
            })
    },
];
