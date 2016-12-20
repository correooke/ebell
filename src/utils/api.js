import wrapFetch from './wrapFetch';
//const API_URL = 'http://servidorfusion.com.ar:12323';
const API_URL = 'http://192.168.0.5:35517/api';
//const API_URL = 'http://192.168.0.5:14072';

const getApi = endpoint => `${API_URL}/${endpoint}`;
const API = {
  get: (url, obj = {}) => wrapFetch(getApi, url, obj),
  post: (url, obj = {}) => wrapFetch(getApi, url, obj),
  delete: (url, obj = {}) => wrapFetch(getApi, url, obj),
};

export default {
  /*getUser: (user) => API.get('user', user),*/
  getTableData: () => API.get('sites', ''),
  getTenantData: (user) => API.get('tenant', user),
  getActiveEvents: (user) => API.get('events', user),
  getActiveEventsByProvider: (user) => API.get('events', user),
  postMessage: (type) => API.post('message', type),
  deleteEvent: (eventID) => API.post('attend_event', eventID),
  tableVerify: (table) => API.get('tableverify', table)
};
