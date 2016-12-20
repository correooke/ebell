import React, {Component} from 'react';
import WorkspaceMenu from './workspace-menu';
import Header from './header';
import TimerMixin from 'react-timer-mixin';
//import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';

class Workspace extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let items = React.Children.toArray(this.props.children);
		items = [<WorkspaceMenu key="1" />, ...items];

		return (<div className="main-container">
					<Header tenantData={this.props.tenantData} />
					<div className="workspace-container hidden-xs">
						<div className="workspace">
							{items}
						</div>
					</div>
				</div>
			);
	}
}

export default Workspace;