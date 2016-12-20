import React from 'react';


const Combo = (props) => {

	const options = props.options.map( (option) => {
		return <option value={option.value}>{option.value}</option>;
	});

	
	return (
			<fieldset className="combo">
				<select>
					{options}
		        </select>
				<label>{props.label}</label>
			</fieldset>									

		);
}


export default Combo;


