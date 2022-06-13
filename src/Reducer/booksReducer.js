function booksReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'get_from_server':
      newState = action.payload.map((b, i) => ({ ...b, row: i, show: true }));
      break;

    case 'sorting':
      newState = [...state].sort((a, b) => {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      });
      break;

    case 'unsorting':
      newState = [...state].sort((a, b) => a.row - b.row);
      break;

    case 'price_filter':
      newState = state.map((o) =>
        o.price > 13 ? { ...o, show: true } : { ...o, show: false }
      );
      break;

    case 'reset':
      newState = state.map((o) => ({ ...o, show: true }));
      break;

    default:
      newState = [...state];
  }
  console.log(newState);
  return newState;
}

export default booksReducer;
