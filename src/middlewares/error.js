export default () => next => action => {
  if (action.error) {
    return;
  }
  next(action);
};
