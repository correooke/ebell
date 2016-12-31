import React, {PropTypes} from 'react';
import Rating from './rating';


const ListColText = ({value, withSmallTitle, columnName}) => {

	let mysmalltitle = () => {
		return (withSmallTitle ? <span className='smalltitle'>{columnName + ': '}</span> : '');
	}

	return (<p className={'c'}>{mysmalltitle()}{value}</p> );
	
}

ListColText.propTypes = {
	value: PropTypes.string.isRequired, 
	withSmallTitle: PropTypes.bool, 
	columnName: PropTypes.string
};

ListColText.defaultTypes = {
	withSmallTitle: false, 
	columnName: ''
};


const ListColImage = ({value, image}) => {
	return (
		<div className={'c'}>
			<a href=''>
				<img src={image} className='img-circle'/><p>{value}</p> 
			</a>
		</div>);
}

ListColImage.propTypes = {
	value: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

const ListColProgressBar = ({value}) => {
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
	let {item} = props;
	if (item === 'exc') {
		return (
			<div className='c'>
				<i className="fa fa-exclamation exc" aria-hidden="true"></i>
			</div>
			);

	} if (item !== 'checked') {
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

const ListColUnknow = ({value}) => {
	return (<p className={'c'}>??{value}</p>);
}

const ListRow = (props) => {
	let colKey = 0;
	const rowValues = props.item.map(
			(value) => {
				let colKey = props.item.indexOf(value);
				let colType = props.data.coltypes[colKey];
				let colCreator;

				if (colType === 'txt'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColText key={colKey} value={value} withSmallTitle={withSmallTitle} columnName={columnName} />;
				} else if (colType === 'img'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColImage key={colKey} value={value} image={'\\images\\1.jpg'} />;
				} else if (colType === 'progress'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColProgressBar key={colKey} value={value} />;
				} else if (colType === 'stars'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColStars key={colKey} value={value} />;
				} else if (colType === 'status'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColDotStatus key={colKey} value={value} />;
				} else if (colType === 'check'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColCheckStatus key={colKey} value={value} />;
				} else if (colType === 'actions'){
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColActions key={colKey} value={value} dataType={props.data.type} />;
				} else {
					colCreator = (colKey, value, withSmallTitle, columnName) => <ListColUnknow value={value} />;
				}
				
				let withSmallTitle = props.data.smalltitle != null && props.data.smalltitle[colKey] === true;
				let columnName = props.data.collist[colKey];

				return colCreator(colKey, value, withSmallTitle, columnName);
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