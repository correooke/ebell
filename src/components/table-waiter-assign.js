import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';

class TableWaiterAssign extends Component {
  
  constructor(props) {
    super(props);
    
  }
  

  getTables = (tables, onTableClick) => {
    return (
      tables ? 
      tables.map(t => 
        <ListItem
          className={`${t.Locked ? 'table-locked' : 'table'}`} 
          primaryText={`Mesa ${t.Name}: ${t.Provider}`}
          rightAvatar={<Avatar />}
          onClick={onTableClick}
        />      
      ) : ''
    );
  }

  render() {
    const { tables, onTableClick } = this.props;

    return (
      <div className="table-waiter-assign">
        <h3>Asignación a mesas.</h3>
        <List>
          {this.getTables(tables, onTableClick)}
        </List>
      </div>
    );
  }
}

TableWaiterAssign.propTypes = {
  tables: PropTypes.array,
  onTableClick: PropTypes.func.isRequired,
};

export default TableWaiterAssign;