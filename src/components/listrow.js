import React from 'react';
import Rating from './rating';


const ListColText = (props) => {
	let mysmalltitle= () => {
				return '';
			};

	if (props.data.smalltitle != null) {

		if (props.data.smalltitle[colKey] === true) {
			mysmalltitle = () => {
				return (
					<span key={colKey} className='smalltitle'>{props.data.collist[colKey] + ': '}</span>
					);
			}
		}

	}

	return (<p className={'c'}>{mysmalltitle()}{props.value}</p> );
	
}

const ListColImage = (props) => {
	return (
		<div className={'c c' + props.colKey}>
			<a href={props.data.url}>
				<img src='\images\1.jpg' className='img-circle'/><p>{props.value}</p> 
			</a>
		</div>);
}

const ListColProgressBar = (props) => {
	let { value } = props;

	return (
		<div className={'c'}>
			<div className='progress'>
		  		<div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{width: value + '%'}}>
		    		<span className="sr-only">{value + '% Complete'}</span>
		  		</div>
		  	</div>
		</div>);

}

const ListColStars = (props) => {
	return (
		<div className={'c'}>
			<Rating />
		</div>
		);	
}

const ListColDotStatus = (props) => {
	let { value } = props;
	return (
		<div className={'c'}>
			<div className={'status ' + value}> 
				<i className="fa fa-circle" />
			</div>
		</div>
		);	
}

const ListColActions = (props) => {
	let {value, dataType} = props;

	if (value === 'edit del') {
		return (
			<div className={'item-actions'}> 
				<a data-toggle="modal" data-target={"#modal" + dataType}><i className="fa fa-pencil edit" aria-hidden="true"></i></a>
				<a data-toggle="modal" data-target={"#deleteModal" + dataType}><i className="fa fa-trash del" aria-hidden="true"></i></a>
			</div>);

	} else if (value === 'del') {
		return (
			<div className={'item-actions'}> 
				<a data-toggle="modal" data-target={"#deleteModal" + dataType}><i className="fa fa-trash del" aria-hidden="true"></i></a>
			</div>);

	} else if (value === 'loc del') {
		return (
			<div className={'item-actions'}> 
				<a><i className="fa fa-map-marker loc" aria-hidden="true"></i></a>
				<a data-toggle="modal" data-target={"#deleteModal" + dataType}>
					<i className="fa fa-trash del" aria-hidden="true"></i>

				</a>
			</div>);
	} else {
		return '';
	}
}

const ListColCheckStatus = (props) => {
	let {value} = props;
	if (value === 'exc') {
		return (
			<div className='c'>
				<i className="fa fa-exclamation exc" aria-hidden="true"></i>
			</div>
			);

	} if (value !== 'checked') {
		return (
			<div className='c'>
				<i className="fa fa-ban ban" aria-hidden="true"></i>
			</div>
			);

	} else {
		return (
			<div className='c'>
				<i className="fa fa-check-circle-o checked" aria-hidden="true"></i>
			</div>
			);
		
	}		
}

const ListColUnknow = (props) => {
	return (<p key={colKey} className={'c c' + colKey}>??{value}</p>);
}

const ListRow = (props) => {
	let colKey = 0;

	const rowValues = props.data.values.map(
			(value) => {
				let colKey = props.data.values.indexOf(value);
				let colType = props.data.coltypes[colKey];

				if (colType === 'txt'){
					return <ListColText key={colKey} value={value} data={props.data} />;
				} else if (colType === 'img'){
					return <ListColImage key={colKey} value={value} data={props.data} />;
				} else if (colType === 'progress'){
					return <ListColProgressBar key={colKey} value={value} />;
				} else if (colType === 'stars'){
					return <ListColStars key={colKey} value={value} />;
				} else if (colType === 'status'){
					return <ListColDotStatus key={colKey} value={value} />;
				} else if (colType === 'check'){
					return <ListColCheckStatus key={colKey} value={value} />;
				} else if (colType === 'actions'){
					return <ListColActions key={colKey} value={value} dataType={props.data.type} />;
				} else {
					return <ListColUnknow />;
				}

				colKey++;
			}
		);

	return (
		<div>
			{rowValues}
			<hr />
		</div>
		);
}


export default ListRow;