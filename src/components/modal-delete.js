import React from 'react';

const ModalDelete (args) => {
	return (
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
		);

}

export default ModalDelete;
