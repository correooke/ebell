import React, {PropTypes} from 'react';
import ListRow from './listrow';

const SearchTop = (props) => {
	return (
		<a className={'action-top search'}>
			<i className="fa fa-search search-control" aria-hidden="true"></i>
			<input className="search-box hidden" type="text" />
		</a>
	);	
}

const AddItem = (props) => {
	return (
		<a className={'action-top add-item'} >
			<i className="fa fa-plus" aria-hidden="true"></i>
		</a>
		);
};

const ColumnHeader = ({columnName}) => {
	return (
			<p className='c'>{columnName}  <a href=""><i className='glyphicon glyphicon-triangle-bottom' /></a></p>
		);
};

const ListHeader = ({columnList}) => {
	let list = columnList.map(
			(col) => {
				return (<ColumnHeader key={col} columnName={col} />)
			});
	return (
		<div>
			{list}
		</div>
	);
}

const List = (props) => {
	let key = 0;
	if (!props.data) {
		return (<p></p>);
	}

	const rowlist = props.data.rowlist ? (props.data.rowlist.map(
		(item) => { 
			let rowKey = key;

			return (
				<li onClick={() => props.onRowClick(rowKey)} key={key++} className={(key % 2 === 0 ? 'even' : 'odd')}> 
					<ListRow data={props.data} item={item} />
				</li>); 
		} )) : <p></p>;

	return (
		<section className={"basic-list " + props.data.type}>
			<div className="header">
				<ListHeader columnList={props.data.collist} />
				
				{(props.withAddItem ? <AddItem /> : '')}
				{(props.withSearch ? <SearchTop /> : '')}	
			</div>
			<hr className="header-line"/>
			<div className="row-list">
				<ul className="list-unstyled">
					{rowlist}
				</ul>
			</div>
		</section>
		);
}

export default List;

List.propTypes = {
	onRowClick: PropTypes.func, 
	withAddItem: PropTypes.bool, 
	withSearch: PropTypes.bool
};

List.defaultTypes = {
	withAddItem: false, 
	withSearch: false
};