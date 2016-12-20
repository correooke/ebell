import React, {Component} from 'react';
import TimerMixin from 'react-timer-mixin';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';

class NotificationBox extends Component {
	constructor(props) {
		super(props);
		//this.state = {};
		this.state = {
		  open: false,
		};		
	}

 	componentDidMount() {
		console.log('Notification DID mount!');
		$(function () {
		  $('[data-toggle="popover"]').popover({ 
			html: true
		  });
		});

	}

	componentWillUnmount() {
		TimerMixin.clearTimeout(this.timer);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
				
	handleTouchTap = (event) => {
		// This prevents ghost click.
		console.log(event.target.value); // Es para revisar que dato me da este objeto
		event.preventDefault();

		this.setState({
		  open: true,
		  anchorEl: event.currentTarget,
		});

		this.timer = TimerMixin.setTimeout(() => {
			this.setState({
			  open: false,
			});

		}, 5000);

	};

	handleRequestClose = () => {
		this.setState({
		  open: false,
		});
		TimerMixin.clearTimeout(this.timer);
	};

	handleAccept = () => {
		this.props.attendEvent(this.props.message.id);
		console.log("Accept attend event");
	};

	getWaiter = (waiterName) => {
		if (waiterName) {
			return (
				<div className="notification-extra-info"> 
					<b>{waiterName}</b>
				</div>);
		} else {
			return '';
		}

	};

	render() {
		return (
			<div>
				<div className={`message ${this.props.message.type}`}
					onTouchTap={this.handleTouchTap} >
					<p className="table">{this.props.message.table}</p>
					<div className="divider"></div>
					<p className="type text-uppercase">{this.props.message.type}</p>
				</div>
		        <Popover
		          open={this.state.open}
		          anchorEl={this.state.anchorEl}
		          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		          targetOrigin={{horizontal: 'left', vertical: 'top'}}
		          onRequestClose={this.handleRequestClose}>
		          	{this.getWaiter(this.props.message.waiterName)}
					<RaisedButton onTouchTap={this.handleAccept} label="Aceptar" />		          
		        </Popover>
	        </div>			
			);


	}
}

NotificationBox.propTypes = {
	message: React.PropTypes.object.isRequired,
	attendEvent: React.PropTypes.func.isRequired
}

export default NotificationBox;