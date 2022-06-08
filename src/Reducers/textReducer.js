function textReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'change_text':
      newState = action.payload;
      break;
    default:
      newState = state;
  }

  return newState;
}

export default textReducer;
