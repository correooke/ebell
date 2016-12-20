import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getTableData } from './../actions/index';
import { connect } from 'react-redux';
import TableStatus from './../components/table-status';

class PageAdminTableStatus extends Component {

	componentWillMount() {
		this.props.getTableData();
	}

	render() {
		return (
			<TableStatus tableData={this.props.workspace} tenantData={this.props.tenantData}  />
		);
	}
}

function mapStateToProps(state) {
	return { workspace: state.workspace, tenantData: state.tenantData };
}

export default connect(mapStateToProps, {getTableData})(PageAdminTableStatus);
