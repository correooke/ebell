import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notifications from './notifications';
import Header from './../components/header';


class PageProvider extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let isAutoUpdate = true;
		let provider = Number.parseInt(this.props.params.id);

		if (Number.isInteger(provider)) {
			return (
				<div className="page-admin">
					<Header tenantData={this.props.tenantData} />		
					<Notifications autoupdate={isAutoUpdate} filterByUser={true} providerID={provider} />
				</div>
			);
		} else {
			return (<div>URL ERROR</div>);
		}
	}
}

function mapStateToProps(state) {
	return { tenantData: state.tenantData };
}

export default connect(mapStateToProps, null)(PageProvider);

