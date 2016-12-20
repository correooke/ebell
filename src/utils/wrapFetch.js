import { API_LOADING, API_FAIL, API_SUCCESS } from './../constants';
import FetchSwitch from './fetchSwitch';

const wrapFetch = (createUrl, url, obj) =>


    dispatch => {
        dispatch({ type: API_LOADING });

        return FetchSwitch(createUrl, url, obj).then(
            res => {
                if (res.status != 200) {
                    //dispatch({ type: API_FAIL, payload: error });
                    return Promise.reject(res.json());
                }

                if (res.data !== "") {
                    return res.data;
                } else {
                    return res.statusText;
                }
            },
            error => {
                dispatch({ type: API_FAIL, payload: error });
                return Promise.reject(error);
            }

        ).then(obj => {
            dispatch({ type: API_SUCCESS });
            return obj;
        }).catch(err => {
            console.log(`error: ${err}`);
            dispatch({ type: API_FAIL });
        });
    };

export default wrapFetch;
