import rand from '../Functions/rand';
import randColor from '../Functions/randColor';
function numbersReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'add_nr':
      //   newState = [...Array(10)].map((_) => ('' + rand(0, 9999)).padStart(4, 0));
      newState = [];
      for (let i = 0; i < 10; i++) {
        newState.push({
          number: ('' + rand(0, 9999)).padStart(4, 0),
          color: randColor(),
          show: true,
          row: i,
        });
      }
      break;

    case 'add_bl':
      newState = [...state];
      newState.push({
        number: ('' + rand(0, 9999)).padStart(4, 0),
        color: 'black',
        show: true,
        row: state.length,
      });

      break;

    case 'rusiavimas':
      newState = [...state];
      newState.sort((a, b) => b.number - a.number);
      break;

    case 'atrusiavimas':
      newState = [...state].sort((a, b) => a.row - b.row);
      break;

    case 'daugiau':
      newState = state.map((o) =>
        o.number > 5000 ? { ...o, show: true } : { ...o, show: false }
      );
      //   newState.filter((a) => parseInt(a.number) > 5000);
      break;

    case 'maziau':
      newState = state.map((o) =>
        o.number < 5000 ? { ...o, show: true } : { ...o, show: false }
      );
      break;

    case 'reset':
      newState = state.map((o) => ({ ...o, show: true }));
      break;

    case 'rem':
      newState = state.map((o) =>
        o.number !== action.payload
          ? { ...o, show: true }
          : { ...o, show: false }
      );
      break;

    case 'remove_this':
      newState = state.map((o) =>
        o.number !== action.payload
          ? { ...o, show: true }
          : { ...o, show: false }
      );
      break;

    case 'filtracija':
      newState = state.map((o) =>
        o.number < action.payload ? { ...o, show: true } : { ...o, show: false }
      );
      break;

    default:
      newState = [...state];
  }

  return newState;
}

export default numbersReducer;
