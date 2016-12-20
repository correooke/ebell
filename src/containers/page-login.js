import React, {Component} from 'react';
import Logo from './../components/logo';
import { connect } from 'react-redux';
import { getTenantData } from '../actions/index';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSelected: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.tenantData) {
			browserHistory.push(`/${this.props.route.data}`);
		}
	}

	componentDidMount() {
		this.handleClick();
	}

    handleClick() {
    	this.props.getTenantData({ 
    		nick: 'oke', 
			pass: '123'
		});
    }
    

	render() {
		return (
			<div className="login">
				<div className="login-container">
					<Logo />
					<div className="login-form">
						<form action="home.html">
							<fieldset>
								<input id="code" type="text" required/>
								<label htmlFor="code">CODIGO</label>
							</fieldset>
							<fieldset>
								<input id="code" type="text" required/>
								<label htmlFor="code">PASSWORD</label>
							</fieldset>
						</form>
						<button id="btn-gointo" className="btn" type="submit" onClick={this.handleClick}>INGRESAR</button>
						<a href="">
							<p className="register">¿Aún no estas registrado? Click aquí</p>
						</a>
					</div>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		tenantData: state.tenantData
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { getTenantData: getTenantData}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);