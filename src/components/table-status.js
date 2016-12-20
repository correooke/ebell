import React, {Component} from 'react';
import List from './list';
import Reference from './reference';

class TableStatus extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	createTableData(tableData, tenantData) {
		if (!tableData || !tenantData) {
			return null;
		}

		let rowList = tableData.map( (t) => {
			let site = tenantData.getSite(t.SiteID);
			let provider = tenantData.getProvider(t.ProviderID);

			return [ t.Status == 0 ? '' : (t.Status == 1 ? 'green' : 'red'), (site ? site.Name : '?'), (provider ? provider.Name : '?'), 'checked', ];
		});
		let tableDataGrid = {
            itemname: 'status',
            type: 'master',
            actions: ['search', ],
            collist: ['ESTADO', 'MESA', 'MOZO', ],
            coltypes: ['status', 'txt', 'txt', 'check',],
            rowlist: rowList
        };

        return tableDataGrid;
	}

	render() {
		let tableData = this.createTableData(this.props.tableData, this.props.tenantData);

		return (
				<div className="main-area table-status">
					<Reference>
						<i className="fa fa-circle ticket" /><p>Cuenta</p>
						<i className="fa fa-circle call" /><p>Llamado</p>
						<i className="fa fa-circle none" /><p>Sin pedido</p>
					</Reference>
					<div className="table-container">
						<p className="title">MESAS ACTIVAS</p>
						<List data={tableData} />
					</div>
				</div>
			);
	}
}

export default TableStatus;