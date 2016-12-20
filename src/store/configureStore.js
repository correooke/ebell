import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import payload from '../middlewares/payload';
import rootReducer from '../reducers/index';
import promiseMiddleware from 'redux-promise';

export default function configureStore(initialState) {

  const preStore = applyMiddleware(payload, thunk, promiseMiddleware)(createStore);

	const store = preStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if (!console.groud)  {
      return rawDispatch;
    }

    return (action) => {
      console.group(action.type);
      console.log('%c PREV. STATE', 'color: gray', store.getState());
      console.log('%c ACTION', 'color: blue', action);
      const returnValue = rawDispatch(action);
      console.log('%c NEXT STATE', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };

  store.dispatch = addLoggingToDispatch(store);

  return store;
}