import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationBox from './../components/notification-box';
import { getActiveEvents, attendEvent, getActiveEventsByProvider } from './../actions/index';
import TimerMixin from 'react-timer-mixin';
import Notification from 'react-web-notification';
import { browserHistory } from 'react-router';

class Notifications extends Component {


	constructor(props) {
		super(props);
		this.state = {};

		this.DoFireGetActiveEvents = this.DoFireGetActiveEvents.bind(this);
	}

	componentDidMount() {
		this.DoFireGetActiveEvents();

		if (this.props.autoupdate) {
			this.timer = TimerMixin.setInterval(() => {
				this.DoFireGetActiveEvents();
			}, 2000);
		}
	}

	DoFireGetActiveEvents() {
		if (this.props.filterByUser) {
			this.props.getActiveEventsByProvider({ ProviderID: this.props.providerID, TenantID: 1});
		} else {
			this.props.fireGetActiveEvents({ TenantID: 1});
		}

	}

	componentWillMount() {
		if (!this.props.tenantData) {
			//browserHistory.push(`/${this.props.filterByUser ? 'login-provider' : 'login'}`);
		}		
	}
	componentWillUnmount() {
		TimerMixin.clearInterval(this.timer);
	}

	render() {
		let events = (this.props.filterByUser ? this.props.activeEvents.byProvider : this.props.activeEvents.new);

		let options = {	
				tag: events ? events.length : "", 
	          	body: "Nueva solicitud de atención", 
	          	icon: "http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png",
	      		lang: 'en',
	      		dir: 'ltr',
	      		sound: './sound.mp3'  
	      	};
	    
	    let ignore = events && this.previous_length ? events.length <= this.previous_length : true;
		this.previous_length = events ? events.length : 0;

		let msgs = (!events || !this.props.tenantData) ? null : events.map( (e) => {
			let site = this.props.tenantData.getSite(e.SiteID);
			let provider = this.props.tenantData.getProvider(e.ProviderID);

			return {
				id: e.ID, 
				table: (site ? site.Name : null), 
				type: (e.Type == 0 ? 'call' : 'ticket'),
				waiterName: (provider ? provider.Name : null),
				startTime: e.StartTime
			};
		});

		let loadingNotifications = () => {
			return <p>Sin notificaciones</p>;
		}

		let msgsViews = !msgs ? loadingNotifications() : msgs.map( (m) => {
			return (<NotificationBox key={`${m.id}`} 
								message={m} 
								attendEvent={this.props.fireAttendEvent} />);
		});
		

		return (
			<div className="notifications">
				<div className="title">
					<p>NOTIFICACIONES</p>
					<div className="divider"></div>
					<div className="notification-area">
						{msgsViews}
					</div>
				</div>
        <Notification
          ignore={ignore}
          notSupported={() => { console.log("Notifications: event notSupported"); }}
          onPermissionGranted={() => { console.log("Notifications: event onPermissionGranted"); }}
          onPermissionDenied={() => { console.log("Notifications: event onPermissionDenied"); }}
          onShow={() => { console.log("Notifications: event onShow"); }}
          onClick={() => { console.log("Notifications: event onClick"); }}
          onClose={() => { console.log("Notifications: event onClose"); }}
          onError={() => { console.log("Notifications: event onError"); }}
          timeout={9000}
          title="EBell"
          options={options}
        />				
			</div> 
			);
	}
}

function mapStateToProps(state) {
	return { activeEvents: state.activeEvents, tenantData: state.tenantData };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { fireGetActiveEvents: getActiveEvents, fireAttendEvent: attendEvent, getActiveEventsByProvider }, dispatch);
}

Notifications.propTypes = {
	autoupdate: React.PropTypes.bool, 
	filterByUser: React.PropTypes.bool, 
	providerID: React.PropTypes.number
}

Notifications.defaultProps = {
	autoupdate: true,
	filterByUser: false, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);