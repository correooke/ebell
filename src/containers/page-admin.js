import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../components/header';
import Notifications from './notifications';
import WorkspaceMenu from './../components/workspace-menu';

class PageAdmin extends Component {

	constructor(props){
		super(props);
	}

	render() {
		let isAutoUpdate = true;
		let main = React.Children.toArray(this.props.main);
		main = [<WorkspaceMenu key="1" />, ...main];

		let side = React.Children.toArray(this.props.side);

		return (
			<div className="page-admin">
				<div className="col-sm-9 no-gutter">
					<div className="main-container">
						<Header tenantData={this.props.tenantData} />
						<div className="workspace-container hidden-xs">
							<div className="workspace">
								{main}
							</div>
						</div>
					</div>			
				</div>
				<div className="col-sm-3 no-gutter side-container">
					{side}
				</div>
			</div>
		);
	}		
} 

function mapStateToProps(state) {
	return { tenantData: state.tenantData };
}

export default connect(mapStateToProps, null)(PageAdmin);


