import React from 'react';
import Waiter from './../components/waiter';
import Ticket from './../components/ticket';
import Cancel from './../components/cancel';

const CustomerCreateEvents = (props) => {
	return (
			<div className="actions-container">
				<div className="actions">
					<Waiter onClick={props.onWaiterClick}></Waiter>
					<Ticket onClick={props.onTicketClick}></Ticket>
					<Cancel onClick={props.onCancelClick}></Cancel>
				</div>
				<div className="labels">
					<label className="action-label">MOZO</label>
					<label className="action-label">CUENTA</label>
					<label className="action-label">CANCELAR</label>
				</div>
			</div>
		);
}

export default CustomerCreateEvents;