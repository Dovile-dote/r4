function kvReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'add_kv':
      //   newState = action.payload;
      newState = [...state, ''];
      break;
    default:
      newState = [...state];
  }

  return newState;
}

export default kvReducer;
