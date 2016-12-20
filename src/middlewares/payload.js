export default ({ dispatch, getState }) => next => action => {

  if (action.payload && typeof action.payload === 'function') {
  		//console.log("add payload");
  	var result = next({ ...action, payload: action.payload(dispatch, getState) });
  	//console.log("result");
    return result;
  }
  return next(action);
};
