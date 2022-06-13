function typeReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'get_type_from_server':
      newState = action.payload.map((b, i) => ({ ...b }));
      break;
    default:
      newState = [...state];
  }
  console.log(newState);
  return newState;
}

export default typeReducer;
