function colorReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'go_pink':
      newState = 'pink';
      break;
    case 'go_y':
      newState = 'yellow';
      //   console.log('yellow');
      break;
    case 'change-color':
      newState = state === 'yellow' ? 'pink' : 'yellow';
      break;
    case 'change-bg':
      newState = state;
      console.log(newState);
      break;
    case 'change_color_to':
      newState = action.payload;
      break;
    default:
      newState = state;
  }

  return newState;
}

export default colorReducer;
