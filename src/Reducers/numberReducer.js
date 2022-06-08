import rand from '../Functions/rand';

function numberReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'do1':
      newState = ('' + rand(0, 1000)).padStart(4, '0');
      break;
    case 'do2':
      newState = ('' + action.payload).padStart(4, '0');
      break;
    default:
      newState = state;
  }

  return newState;
}

export default numberReducer;
