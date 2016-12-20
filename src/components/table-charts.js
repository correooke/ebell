import React, { Component } from 'react';
import d3 from 'd3';
import c3 from 'c3';
import Combo from './combo';
 

class TableCharts extends Component {

	componentDidMount() {
		var chart = c3.generate({
		    bindto: this.refs.chart,
		    data: {
		        columns: [
		            ['data1', 300, 350, 300, 0, 0, 0],
		            ['data2', 130, 100, 140, 200, 150, 50]
		        ],
		        types: {
		            data1: 'area',
		            data2: 'area-spline'
		        }
		    }
		});
	}

	render() {
		let items2 = [];

		for (var i = 1; i < 100; i++) {
			items2.push({value: i});
		}


		return (
			<div className="table-charts">
				<div className="reference">
				</div>
				<div className="table-container">
					<Combo label="CANTIDAD DE MESAS" options={items2}/> 
					<p className="title">ESTADISTICAS</p>
					<div ref="chart" ></div>
				</div>
			</div>
			);
	}
}
//					<Combo label="Tipo de gráfico" options={this.items}/> 

export default TableCharts;