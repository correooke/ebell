import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DoTableVerify } from './../actions/index';
import TimerMixin from 'react-timer-mixin';
import DownloadApp from './../components/download-app';
import LogoColor from './../components/logo-color';
import QRHelp from './../components/qr-help.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class PageCustomerSelectTable extends Component {

	constructor(props) {
		super(props);
		this.state = { securityCode: ''};

	}

    componentWillUnmount() {
        TimerMixin.clearTimeout(this.timer);
    }

    componentWillReceiveProps(nextProps) {
    	if (nextProps.tableVerify) {
    		browserHistory.push('\customer');
    	}
    }

    handleAccept = () => {
    	this.props.onTableVerify(this.txtSecurityCode.getValue());
    };

    handleSubmit = (e) => {

    	this.handleAccept();
    	e.preventDefault();
    };

	render() {

		return (
			<div className="page-customer-select">
				<LogoColor /> 
				<form className="middle" onSubmit={this.handleSubmit} > 
					<QRHelp />
					<TextField className="security-code" ref={component => this.txtSecurityCode = component} 
						hintText="Ingrese el código de seguridad" 
						id="table-code"
						floatingLabelText="Código de Seguridad" />
					<RaisedButton className="accept-button" onTouchTap={this.handleAccept} label="Aceptar" /> 
				</form>	
				<div className="bottom">			
					<div className="footer">
						<DownloadApp />
					</div>				
				</div>				
			</div>
			);
	}

}

function mapStateToProps(state) {
	return {
		tableVerify: state.tableVerify
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({onTableVerify: DoTableVerify}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCustomerSelectTable);

