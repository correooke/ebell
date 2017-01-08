import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CheckBox from 'material-ui/CheckBox'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TableWaiterAssign from './table-waiter-assign';
import { weekDays as getWeekDays } from './../utils/weekDays';

class TableConfigurationDialog extends Component {

  constructor(props) {
    super(props);
    this.updateProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(nextProps);
  }

  updateProps = (props) => {
    const { providerSiteDefinitions, shifts } = props;

    const weekDays = [0, 1, 2, 3, 4, 5, 6].map(d => ({
      day: getWeekDays(d, true),
      checked: providerSiteDefinitions.some(psd => psd.WeekDay === d),
      shifts: shifts.map(s => ({
        name: s.ShiftName,
        checked: providerSiteDefinitions.some(psd => (psd.WeekDay === d && psd.ShiftHourID === s.ID))
      })),
    })
    );
    this.state = { shifts, weekDays };
  }

  handleOnCheckWeek(obj, isChecked) {
    let newState = { ...obj, checked: isChecked.target.checked };
    debugger;
    const weekDays = this.state.weekDays.map(w => (w.day === newState.day) ? newState : w);
    this.setState({ weekDays });
  }

  handleOnCheckShift = (weekDay, shift, isChecked) => {
    debugger;
    const newShift = { ...shift, checked: isChecked };
    const shifts = weekDay.shifts.map(s => (s.name === shift.name) ? newShift : s);
    const newWeekDay = { ...weekDay, shifts };
    const weekDays = this.state.weekDays.map(w => (w.day === newWeekDay.day) ? newWeekDay : w);
    this.setState({ weekDays });
  }

  onTableClick = () => {
    console.log('onTableClick');
  }


  render() {
    const {provider, open, handleDialogCancel, handleDialogAccept} = this.props;

    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onTouchTap={handleDialogCancel}
        />,
      <FlatButton
        label="Aceptar"
        primary
        disabled={false}
        onTouchTap={handleDialogAccept}
        />,
    ];

    const {weekDays, shifts} = this.state;

    const checkShift = (shift, wd) => (
      <div className='shift-container'>
        <CheckBox
          className=''
          label={shift.name}
          checked={shift.checked}
          onCheck={(obj, isChecked) => this.handleOnCheckShift(wd, shift, isChecked)} />
        <p>Mesas atendidas: No asignado</p>
        <FlatButton label='Asignar' />
      </div>);

    const checkShifts = (wd) => (<div className='shift-checks'>
      {(wd.checked ? wd.shifts.map(s => checkShift(s, wd)) : '')}
    </div>
    );

    const checkWeekDays = weekDays.map(w => <div>
      <CheckBox
        key={w.day}
        label={w.day}
        checked={w.checked}
        onCheck={this.handleOnCheckWeek.bind(this, w)}
        />
      {checkShifts(w)}
    </div>);

    const tables = [
      {
        Name: 10,
        Provider: 'Juan',
        Locked: false,
      },
      {
        Name: 11,
        Provider: 'Esteban',
        Locked: true,
      },
      {
        Name: 12,
        Provider: 'Juan',
        Locked: false,
      },
      {
        Name: 13,
        Provider: 'Juan',
        Locked: false,
      },
    ];

    return (<Dialog className='table-configuration-dialog'
      title="Asignación del mozo a turnos y mesas"
      actions={actions}
      modal={true}
      open={open}
      autoScrollBodyContent
      >
      <h2>{provider ? provider.Name : ''}</h2>
      <hr />
      <div className="col-md-6">
        {checkWeekDays}
      </div>
      <div className="col-md-6">
        <TableWaiterAssign tables={tables} onTableClick={this.onTableClick} />
      </div>
    </Dialog>);

  }
}

export default TableConfigurationDialog;

TableConfigurationDialog.propTypes = {
  provider: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  shifts: PropTypes.array.isRequired,
  providerSiteDefinitions: PropTypes.array.isRequired,
  handleDialogCancel: PropTypes.func.isRequired,
  handleDialogAccept: PropTypes.func
};

