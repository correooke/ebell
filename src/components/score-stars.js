import React from 'react';
import Star from './star';

const ScoreStars = (props) => {
	if (props.visible === false)
		return <div></div>;
	
	return (
			<div className="score">
				<div className="score-container">
					<p className="score-label">{props.label}</p>
					<div className="rating">
						<Star></Star>
						<Star></Star>
						<Star></Star>
						<Star></Star>
						<Star></Star>
					</div>
				</div>
			</div>);
}

export default ScoreStars;

