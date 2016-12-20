import { push, goBack } from 'react-router-redux';

export default ({ dispatch }) => next => action => {
  if (action.meta && action.meta.nav) {
    next({ type: action.type, payload: action.payload });
    const nav = action.meta.nav;
    let newLocation;
    if (nav.startsWith('/')) {
      newLocation = nav;
    } else if (nav === 'BACK') {
      dispatch(goBack());
      return;
    } else {
      newLocation = `${location.pathname}/${nav}`;
    }
    dispatch(push(newLocation));
  } else {
    next(action);
  }
};
