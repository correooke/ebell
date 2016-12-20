import React from 'react';


const Cancel = (props) => {
	return (
		<div id={props.id} onClick={props.onClick}
			className="action-icon cancel">
			<svg
				x="0px" y="0px"
				viewBox="0 0 47.8 46.5"
				xmlSpace="preserve">
				<ellipse className="circle" cx="23.9" cy="23.3" rx="23.9" ry="23.3"/>
				<g>
					<path className="figure" d="M33.5,34.7H28l-4.1-7.3l-4.3,7.3h-5.3l7-11l-6.6-10.5h5.4l3.8,7l3.9-7H33l-6.6,10.3L33.5,34.7
						z"/>
				</g>
			</svg>
		</div>
	);

}

export default Cancel;

