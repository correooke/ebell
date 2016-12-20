import React from 'react';


const Waiter = (props) => {
	return (
		<div id={props.id} onClick={props.onClick}
			className="action-icon waiter">
			<svg
				x="0px" y="0px"
				viewBox="0 0 47.8 46.5"
				xmlSpace="preserve">
				<ellipse className="circle" cx="23.9" cy="23.3" rx="23.9" ry="23.3"/>
				<g>
					<path className="figure" d="M18.5,10.5c0,0,4.3-1.5,7.2,1.2s6,5.9,6,5.9s1.2,0.9,0.4,2.7c-0.8,1.8-3.2,9-13.9,9.8
						c0,0-2.2,0-2.6-0.8c-0.4-0.8-3.4-7.8-3.4-7.8s-1.9-3.9,1-7.2l0.9-3.1c0,0,0.1-1.4,1.9-1.1L18.5,10.5z"/>
					<path className="figure" d="M12.1,12.7c-0.3-3.3,1.2-4.8,4.5-4.5c-0.1-0.6-0.4-0.8-1-0.9c-2.7-0.3-4.7,1.7-4.4,4.4
						C11.2,12.3,11.4,12.6,12.1,12.7z"/>
					<path className="figure" d="M16.6,38.3c0.1-0.4,0.2-0.7,0.3-1.1c10.9,0.1,18.2-4.9,22.2-15.2c0.2,0,0.4,0.1,0.6,0.1
						c0.1,0,0.3,0,0.4,0.1c0.2,0,0.5,0.5,0.5,0.7c0,0.1-0.1,0.3-0.1,0.4c-2.1,9-13.9,17-23.5,15.7C16.8,39.1,16.5,38.5,16.6,38.3z"/>
					<path className="figure" d="M17.2,32.7c8.5,0,14.4-3.9,17.5-11.9c1.6,0.1,1.8,0.8,1.3,2.2c-2.5,6.7-10,11.8-17.1,11.7
						C17.4,34.7,16.7,34.2,17.2,32.7z"/>
					<path className="figure" d="M18.5,10.5"/>
					<path className="figure" d="M17.8,37.9"/>
				</g>
			</svg>
		</div>
	);

}

export default Waiter;

