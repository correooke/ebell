import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux';


import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import PageAdmin from './containers/page-admin';
import PageProvider from './containers/page-provider';
import PageLogin from './containers/page-login';
import PageCustomer from './containers/page-customer';
import PageCustomerSelectTable from './containers/page-customer-select-table';
import PageAdminTableStatus from './containers/page-admin-table-status';
import PageAdminTableStats from './containers/page-admin-table-stats';
import PageAdminTableConfig from './containers/page-admin-table-config';
import Notifications from './containers/notifications';

import configureStore from './store/configureStore';

import Logo from './components/logo';

require("../style/my_styles.scss");

injectTapEventPlugin();

if (module.hot) {
	module.hot.accept();
} 

const createStoreWithMiddleware = configureStore();

const isAutoUpdate = true;

ReactDOM.render(
	<Provider store={createStoreWithMiddleware}>
		<Router history={browserHistory} >
			<Route path="/" component={App} >
				<IndexRoute component={PageLogin} />
				<Route path="login" component={PageLogin} data="central/status" />
				<Route path="login-provider" component={PageLogin} data="provider/3" />
				<Route path="central" component={PageAdmin} >
					<Route path="status" components={{ main: PageAdminTableStatus, side: Notifications }} autoupdate={isAutoUpdate} />
					<Route path="stats" components={{ main: PageAdminTableStats, side: Notifications }} autoupdate={isAutoUpdate} />
					<Route path="config" components={{ main: PageAdminTableConfig, side: Notifications }} autoupdate={isAutoUpdate} />
				</Route>
				<Route path="select" component={PageCustomerSelectTable} />
				<Route path="customer" component={PageCustomer} />
				<Route path="provider/:id" component={PageProvider} />
			</Route>
		</Router>
	</Provider>,
	document.querySelector('.main-container'));

