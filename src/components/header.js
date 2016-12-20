import React, {Component} from 'react';
import Logo from './logo';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {

		let tenantName = '';

		if (this.props.tenantData) {
			tenantName = this.props.tenantData.Name;
		}
		return (
			<div className="main-header">
				<div className="part">
					<Logo />	
				</div>
				<div className="part">
					<p className="datetime">{tenantName}</p>
				</div>
				<div className="part">
					<p className="shift"> Turno Mañana</p>
				</div>
			</div>
			);
	}
}

export default Header;