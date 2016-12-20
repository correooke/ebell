import React from 'react';
import ListRow from './listrow';


const List = (props) => {
	let key = 0;
	if (!props.data) {
		return (<p></p>);
	}

	const getClassByRow = (key) => {
		return (key % 2 === 0 ? 'even' : 'odd');
	};

	const rowlist = props.data.rowlist ? (props.data.rowlist.map(
		(item) => { 
			let dataListRow = {
				coltypes: props.data.coltypes,
				type: props.data.type, 
				values: item,
				url: props.data.url,
				collist: props.data.collist,
				smalltitle: props.data.smalltitle,
			};
			return (
				<li key={key++} className={getClassByRow(key)}> 
					<ListRow data={dataListRow} />
				</li>); 
		} )) : <p></p>;

	const collist = props.data.collist.map(
		(col) => {
			return (<p key={col} className='c'>{col}  <a href=""><i className='glyphicon glyphicon-triangle-bottom' /></a></p>)
		});

	const actions = () => {
		if (props.data.actions.indexOf('add') >= 0) {
 			return (
 				<div className="actions">
 					<a data-toggle="modal" data-target={"#modal" + props.data.type}>
 						<div className="btn-add"></div>
 					</a>
 				</div>);
		} else {
			return (<p></p>);
		}
	};
/*<img className="btn" src="\images\boton.png"/>*/
	const actionsMap = () => {
		let actionTopIndex = props.data.actions.indexOf('map');
		if (actionTopIndex >= 0) {			
 			return (
					<a className={'action-top-' + actionTopIndex + " map"} data-toggle="modal" data-target="#modalmap">
						<i className="fa fa-map-marker" aria-hidden="true"></i>
					</a>
 				);
		} 
	};

	const actionsTop = () => {

		let actionTopIndex = props.data.actions.indexOf('add-top');
		if (actionTopIndex >= 0) {			
 			return (
					<a className={'action-top-' + actionTopIndex + " add-item"} data-toggle="modal" data-target={"#modal" + props.data.type}>
						<i className="fa fa-plus" aria-hidden="true"></i>
					</a>
 				);
		} 
	};

	const searchTop = () => {
		let actionTopIndex = props.data.actions.indexOf('search');
		if (actionTopIndex >= 0) {
 			return (
					<a className={'action-top-' + actionTopIndex + " search"}>
						<i className="fa fa-search search-control" aria-hidden="true"></i>
						<input className="search-box hidden" type="text" />
					</a>
 				);	
 		}	
	}

	return (
		<section className={"basic-list " + props.data.type}>
			<div className="header">
				{collist}
				
				{actionsTop()}
				{searchTop()}	
				{actionsMap()}			
			</div>
			<hr className="header-line"/>
			<div className="row-list">
				<ul className="list-unstyled">
					{rowlist}
				</ul>
			</div>
			{actions()}

			<div className="modal fade modal-delete" id={"deleteModal" + props.data.type} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title" id="myModalLabel">EBell</h4>
			      </div>
			      <div className="modal-body">
			      	<div className="message">
			      		<i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
			      		<strong>Sure you want to delete the {props.data.itemname}?</strong>
			      	</div>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn">ACCEPT</button>
			        <button type="button" className="btn" data-dismiss="modal">CANCEL</button>
			      </div>
			    </div>
			  </div>
			</div>			
		</section>
		);
}

export default List;