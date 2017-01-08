import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { eventMessage } from './../actions/index';
import TimerMixin from 'react-timer-mixin';
import DownloadApp from './../components/download-app';
import CustomerCreateEvents from './../components/customer-create-events';
import CustomerMessage from './../components/customer-message';
import CustomerTableData from './../components/customer-table-data';
import ScoreStars from './../components/score-stars';
import LogoColor from './../components/logo-color';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { browserHistory } from 'react-router';

import { MSG_TYPE_CANCEL_REQUEST, MSG_TYPE_TICKET_REQUEST, MSG_TYPE_ATTENTION_REQUEST } from './../constants'

class PageCustomer extends Component {

	constructor(props) {
		super(props);
		this.state = {
						message: '',
						showMessage: false,
						showScore: false
					};

		this.onEventClick = this.onEventClick.bind(this);
	}

	onWaiterClick() {
		this.onEventClick(this.props.tableVerify, MSG_TYPE_ATTENTION_REQUEST);
	}

	onTicketClick() {
		this.onEventClick(this.props.tableVerify, MSG_TYPE_TICKET_REQUEST);
	}

	onCancelClick() {
		this.onEventClick(this.props.tableVerify, MSG_TYPE_CANCEL_REQUEST);
	}

	onEventClick(Site, EventType) {
		if (Site) {
			this.props.onEventMessage(Site.SiteID, EventType);	
		}
	}
    componentWillUnmount() {
        TimerMixin.clearTimeout(this.timer);
        TimerMixin.clearTimeout(this.timerScore);
    }

    componentWillReceiveProps(nextProps) {
    	let lastMsg = nextProps.pageCustomer[nextProps.pageCustomer.length-1];

    	let newMsg = { 
    		message: `${lastMsg.Message}`, 
    		showMessage: true
    	};

        this.setState(newMsg);

        if (this.timer) {
        	TimerMixin.clearTimeout(this.timer);
        }
        if (this.timeScore) {
        	TimerMixin.clearTimeout(this.timerScore);
        }
        
        this.timer = TimerMixin.setTimeout(() => {
			this.setState({ ...this.state, showMessage: false });
        }, 5000);

        this.timerScore = TimerMixin.setTimeout(() => {
			this.setState({ ...this.state, showScore: true });
        }, 50000);
    }

    handleTableDataClick() {
    	console.log("handleTableDataClick");

    	browserHistory.push('\select');
    }

	render() {

		return (
			<div className="page-customer actions">
				<LogoColor /> 
				<div className="middle"> 
					<CustomerTableData table={this.props.tableVerify ? this.props.tableVerify.SiteName : '?'} 
						onTableDataClick={this.handleTableDataClick.bind(this)} /> 
					<CustomerMessage message={this.state.message} visible={this.state.showMessage} />
				</div> 
				<div className="bottom">
					<CustomerCreateEvents 
						onWaiterClick={this.onWaiterClick.bind(this)} 
						onTicketClick={this.onTicketClick.bind(this)} 
						onCancelClick={this.onCancelClick.bind(this)} />
					<div className="footer">
						<ScoreStars visible={this.state.showScore} label="PUNTUAR ATENCIÓN" />
						<DownloadApp />
					</div>
				</div>
			</div>
			);
	}

}

function mapStateToProps(state) {
	return {
		tableVerify: state.tableVerify,
		pageCustomer: state.pageCustomer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({onEventMessage: eventMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCustomer);

