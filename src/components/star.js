import React from 'react';

const Star = () => {
	let color = '#F29100';
	let color2 = '#FFFF00';
	return (
			<svg className="star" 
					x="0px" 
					y="0px"
				 	viewBox="0 0 92.6 90.2" 
				 	style={{fill:'inherit'}} 
				 	xmlSpace="preserve">
				<polygon className="star-figure" points="75.7,89.5 46.9,74.9 18.5,90.2 23.6,58.3 0.2,36.1 32.1,31.1 46,1.9 60.7,30.7 
					92.7,35 69.8,57.8 "/>
			</svg>

		);

}

export default Star;