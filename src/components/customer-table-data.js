import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 80,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const CustomerTableData = (props) => {
	return (					
		<div className="" onClick={props.onTableDataClick} >
		 	<Paper style={style} zDepth={2} rounded={false} >
 				<h2>Mesa: {props.table}</h2>
		 	</Paper>
		</div>
		);
}

export default CustomerTableData;