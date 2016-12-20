import API from './../utils/api';

export const LOGIN = 'LOGIN';
export const MSG = 'MSG';
export const TABLE_DATA = 'TABLE_DATA';
export const TENANT_DATA = 'TENANT_DATA';
export const ACTIVE_EVENTS = 'ACTIVE_EVENTS';
export const ACTIVE_EVENTS_BY_PROVIDER = 'ACTIVE_EVENTS_BY_PROVIDER';
export const ATTEND_EVENTS = 'ATTEND_EVENTS';
export const TABLE_VERIFY = 'TABLE_VERIFY';

export const menuSelection = (option) => {
	console.log('Acción workspaceMenu');
	return {
		type: 'WORKSPACE-SELECTED',
		payload: option
	}
};

export const login = (user) => {
console.log('Acción login');
  return {
    type: LOGIN,
    payload:  user
  }
};

export const eventMessage = (SiteID, type) => {
	let newMsg = {
		ID: 0,
		Type: type,
		SiteID:SiteID,
		UserID:0,
		UserProviderID:0,
		Status:0,
		TenantID:0,
		Token: 999
	};

	const msg = API.postMessage(newMsg);

	return {
		type: MSG,
		payload: msg
	}
};

export const getTableData = () => {
		
	const tableData = API.getTableData();

	return {
		type: TABLE_DATA,
		payload: tableData
	}
};

export const getTenantData = () => {
	const tenantData = API.getTenantData();

	return {
		type: TENANT_DATA,
		payload: tenantData
	}
};

export const getActiveEvents = (user) => {
	const pay = API.getActiveEvents(user);
	return {
		type: ACTIVE_EVENTS,
		payload: pay
	}
}

export const getActiveEventsByProvider = (user) => {
	const pay = API.getActiveEventsByProvider(user);
	return {
		type: ACTIVE_EVENTS_BY_PROVIDER,
		payload: pay
	}
}

export const attendEvent = (eventID) => {
	const pay = API.deleteEvent(eventID);

	return {
		type: ATTEND_EVENTS,
		payload: pay
	}
}

export const DoTableVerify = (table) => {
	const pay = API.tableVerify(table);

	return {
		type: TABLE_VERIFY,
		payload: pay
	}
}


