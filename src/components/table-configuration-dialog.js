import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CheckBox from 'material-ui/CheckBox'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TableConfigurationDialog extends Component {

  constructor(props) {
    super(props);

    const shifts = ['Mañana', 'Tarde', 'Noche'];

    const weekDays = [{
      day: 'Lunes',
      checked: false,
      shifts: []
    },
    {
      day: 'Martes',
      checked: false,
      shifts: []
    },
    {
      day: 'Miércoles',
      checked: false,
      shifts: []
    },
    {
      day: 'Jueves',
      checked: false,
      shifts: []
    },
    {
      day: 'Viernes',
      checked: false,
      shifts: []
    },
    {
      day: 'Sábado',
      checked: false,
      shifts: []
    },
    {
      day: 'Domingo',
      checked: false,
      shifts: []
    }
    ];

    this.state = { shifts, weekDays };
  }

  handleOnCheck(obj, isChecked) {
    let newState = { ...obj, checked: isChecked.target.checked };
    debugger;
    const weekDays = this.state.weekDays.map(w => (w.day === newState.day) ? newState : w);
    this.setState({ weekDays });
    //this.setState({weekDays: [...this.state.weekDays, obj] });
  }

  render() {
    const {provider, open, handleDialogCancel, handleDialogAccept} = this.props;

    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={handleDialogCancel}
        />,
      <FlatButton
        label="Aceptar"
        primary={true}
        disabled={true}
        onTouchTap={handleDialogAccept}
        />,
    ];

    const {weekDays, shifts} = this.state;

    const checkShift = (shift) => (<div className='shift-container'>
      <CheckBox className='' label={shift} />
      <p>Mesas atendidas: No asignado</p>
      <FlatButton label='Asignar' />
    </div>);

    const checkShifts = (wd) => (<div className='shift-checks'>
      {(wd.checked ? shifts.map(s => checkShift(s)) : '')}
    </div>
    );

    const checkWeekDays = weekDays.map(w => <div>
      <CheckBox
        key={w.day}
        label={w.day}
        checked={w.checked}
        onCheck={this.handleOnCheck.bind(this, w)}
        />
      {checkShifts(w)}
    </div>);


    //this.state = {...checkWeekDays};

    return (<Dialog className='table-configuration-dialog'
      title="Asignación del mozo a turnos y mesas"
      actions={actions}
      modal={true}
      open={open}
      >
      <h2>{provider ? provider.Name : ''}</h2>
      <hr />
      {checkWeekDays}
    </Dialog>);

  }
}

export default TableConfigurationDialog;

TableConfigurationDialog.propTypes = {
  provider: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDialogCancel: PropTypes.func.isRequired,
  handleDialogAccept: PropTypes.func
};

