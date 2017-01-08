import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './../components/list';
import Reference from './../components/reference';
import {weekDays} from './../utils/weekDays';

import TableConfigurationDialog from './../components/table-configuration-dialog';


class PageAdminTableConfig extends Component {

	constructor(props) {
		super(props);

		this.state = {open: false};
	}

	createConfigData(tenantData) {
		if (!tenantData) {
			return null;
		}

		let rowList = tenantData.Providers.map( (p) => {

			let psd = tenantData.getProviderSiteDefinitions(p.ID);

			let uniqueShiftHours = psd.reduce((reduceValue, value, index, array) => {
				return (reduceValue.includes(value.ShiftHourID) ? reduceValue : [...reduceValue, value.ShiftHourID]);
			}, []);
			// Todos los turnos por provider
			let allShifts = uniqueShiftHours.reduce((previousValue, currentValue, index, array) => {
				let sh = tenantData.getShiftHour(currentValue);

				return (index === 0 ? `${sh.ShiftName}` : `${previousValue}-${sh.ShiftName}`);
			}, 'Sin turno');

			let uniqueSites = psd.reduce((reduce, provSiteDef, index, arr) => {
				return (reduce.includes(provSiteDef.SiteID) ? reduce : [...reduce, provSiteDef.SiteID]);
			}, []);
			// Todos los sites por provider
			let allSites = uniqueSites.reduce((reduce, value, index, arr) => {
				let site = tenantData.getSite(value);
				return (index === 0 ? site.Name : `${reduce}, ${site.Name}`);
			}, 'Sin mesa asignada');

			let uniqueWeekDays = psd.reduce((reduce, psd, index, arr) => {
				return (reduce.includes(psd.WeekDay) ? reduce : [...reduce, psd.WeekDay]);
			}, []);
			// Todos los turnos por provider
			let allDays = uniqueWeekDays.reduce((reduce, day, index, arr) => {
				let dayName = weekDays(day);
				return (index === 0 ? dayName : `${reduce}, ${dayName}`);
			}, 'Sin días asignados');

			return [p.Name,allDays, allShifts, allSites, 'edit del'];
		});

		let tableDataGrid = {
            itemname: 'status',
            type: 'master',
            actions: [],
            collist: ['MOZO', 'DÍAS', 'TURNO', 'MESAS'],
            coltypes: ['txt', 'txt', 'txt', 'txt', 'actions'],
            rowlist: rowList
        };

        return tableDataGrid;

	}

	onListRowClick(row) {
		this.setState({provider: this.props.tenantData.Providers[row], open: true});
	}

	handleDialogClose() {
		this.setState({open: false});
	}

	handleDialogAccept() {
		this.setState({open: false});
	}

	render() {
		let configData = this.createConfigData(this.props.tenantData);
		let {provider, open} = this.state;

		const providerSiteDefinitions = this.state.provider ? 
			this.props.tenantData.getProviderSiteDefinitions(this.state.provider.ID) : null;

		return (
			<div className="main-area table-configuration">
				<Reference />
				<div className="table-container">
					<p className="title">CONFIGURACIÓN DE MESAS</p>
					<List 
						data={configData} 
						onRowClick={this.onListRowClick.bind(this)} />
				</div>
				{(provider ? 
					<TableConfigurationDialog 
						provider={provider} 
						open={open} 
						providerSiteDefinitions={providerSiteDefinitions}
						shifts={this.props.tenantData.ShiftHours}
						handleDialogCancel={this.handleDialogClose.bind(this)} 
						handleDialogAccept={this.handleDialogAccept.bind(this)} /> : '')}			
			</div>			
		);
	}
}

function mapStateToProps(state) {
	return { tenantData: state.tenantData };
}

export default connect(mapStateToProps, null)(PageAdminTableConfig);