const defaultState = {
  secretValue: 0
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'increase') {
    return {
      secretValue:  state.secretValue + 1
    };
  } else if (action.type === 'decrease') {
    return {
      secretValue: state.secretValue - 1
    };
  }
  return state;
};

export default reducer;
