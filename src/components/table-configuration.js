import React, {Component} from 'react';
import List from './list';
import Combo from './combo';

class TableConfiguration extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	listData = {
		itemname: 'visit',
		type: 'master',
		actions: ['add-top'],
		url: 'visits-info',
		collist: ['Mozo', 'Días', 'Turno', 'Mesas', ],
		smalltitle: [true, true, false, false, ],					
		coltypes: ['img', 'txt', 'txt', 'txt', 'actions'],
		rowlist: [
			['Javier Martinez', 'L-S', 'Mañana - Tarde', '1-10, 12', 'edit del'],
			['Javier Martinez', 'L-S', 'Mañana - Tarde', '1-10, 12', 'edit del'],
		],
	};

	render() {
		let items = [];

		for (var i = 1; i < 100; i++) {
			items.push({value: i});
		}

		return (
				<div className="table-configuration">
					<div className="reference">
					</div>
					<div className="table-container">
						<Combo label="CANTIDAD DE MESAS" options={items}/> 
						<Combo label="CANTIDAD DE MOZOS" options={items}/>
						<p className="title">CONFIGURACION DE MESA</p>
						<List data={this.listData} />
					</div>
				</div>
			);
	}
}

export default TableConfiguration;