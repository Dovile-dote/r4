function booksReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'get_from_server':
      newState = action.payload;
      break;
    default:
      newState = [...state];
  }

  return newState;
}

export default booksReducer;
