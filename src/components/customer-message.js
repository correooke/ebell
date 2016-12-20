import React from 'react';

const CustomerMessage = (props) => {
	let cssClassVisible = props.visible ? ' visible' : ' ';
	let cssClass = `message ${cssClassVisible}`;

	return (
		<div className={cssClass}>
			<img src="\images\message.svg" />
			<h4 className="message-text">{props.message}</h4>
		</div>
		);

}

export default CustomerMessage;