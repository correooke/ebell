import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { menuSelection } from '../actions/index';
import { bindActionCreators } from 'redux';

const URL_STATUS = "/central/status";
const URL_STATS = "/central/stats";
const URL_CONFIG = "/central/config";

class WorkspaceMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let pageSelection = this.props.url.location.pathname;

		let addSelected = (baseClass, menuID) => {
			return `${baseClass}${(menuID === pageSelection) ? ' selected' : ''}`;
		}

		let getMenuTitle = (menu) => {
			switch (menu) {
				case URL_STATUS: 
					return "Estado actual";
				case URL_CONFIG:
					return "Configuración";
				case URL_STATS:
					return "Estadísticas";
			}
			return "";
		}
		return (
			<div className="workspace-menu">
				<div className="current-menu">
					<h4>{getMenuTitle(pageSelection)}</h4>
				</div>

				<Link to={URL_STATUS}>
					<i className={addSelected("fa fa-home home", URL_STATUS)} aria-hidden="true"></i>
				</Link>
				<Link to={URL_CONFIG}>
					<i className={addSelected("fa fa-cog config", URL_CONFIG)} aria-hidden="true"></i>
				</Link>
				<Link to={URL_STATS}>
					<i className={addSelected("fa fa-bar-chart statistics", URL_STATS)} aria-hidden="true"></i>
				</Link>
			</div>
			);

	}
}

const mapStateToProps = (state, ownProps) => ({url: ownProps});

export default withRouter(connect(mapStateToProps, null)(WorkspaceMenu));
