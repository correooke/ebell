import { combineReducers } from 'redux';
import UserReducer from './reducer-user';
import WorkspaceReducer from './reducer-workspace';
import MenuSelectionReducer from './menu-selection-reducer';
import PageCustomerReducer from './page-customer-reducer';
import TenantData from './reducer-tenant';
import ActiveEventsReducer from './active-events-reducer';
import TableVerifyReducer from './table-verify-reducer';

const rootReducer = combineReducers({
	user: UserReducer,
	workspace: WorkspaceReducer,
	menuSelection: MenuSelectionReducer,
	pageCustomer: PageCustomerReducer,
	tenantData: TenantData,
	activeEvents: ActiveEventsReducer,
	tableVerify: TableVerifyReducer
});

export default rootReducer;