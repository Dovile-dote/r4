import './App.css';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import booksReducer from './Reducer/booksReducer';
import typeReducer from './Reducer/typeReducer';

function App() {
  //   const [books, setBooks] = useState([]);
  const [books, dispachBooks] = useReducer(booksReducer, []);
  const [type, dispachType] = useReducer(typeReducer, []);

  // useEffect(() => {
  //   axios.get('http://in3.dev/knygos/').then((res) => {
  //     setBooks(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get('http://in3.dev/knygos/').then((res) => {
  //     dispachBooks({ payload: res.data, type: 'get_from_server' });
  //   });
  // }, []);

  useEffect(() => {
    axios.get('http://in3.dev/knygos/').then((res) => {
      const action = {
        payload: res.data,
        type: 'get_from_server',
      };
      dispachBooks(action);
    });
  }, []);

  useEffect(() => {
    axios.get('https://in3.dev/knygos/types/').then((res) => {
      const action = {
        payload: res.data,
        type: 'get_type_from_server',
      };
      dispachType(action);
    });
  }, []);

  const sortBooks = () => {
    const action = {
      type: 'sorting',
    };
    dispachBooks(action);
  };

  const unSortBooks = () => {
    const action = {
      type: 'unsorting',
    };
    dispachBooks(action);
  };

  const daugiau = () => {
    const action = {
      type: 'price_filter',
    };
    dispachBooks(action);
  };

  const reset = () => {
    const action = {
      type: 'reset',
    };
    dispachBooks(action);
  };

  const reload = () => {
    axios.get('http://in3.dev/knygos/').then((res) => {
      const action = {
        payload: res.data,
        type: 'get_from_server',
      };
      dispachBooks(action);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOKS</h1>
        <div className="column">
          {books.length ? (
            books.map((b) =>
              b.show ? (
                <div key={b.id}>
                  {' '}
                  {b.title} {b.price} eu.
                  <i> {type.map((t) => (t.id === b.type ? t.title : null))}</i>
                </div>
              ) : null
            )
          ) : (
            <h2>Loading...</h2>
          )}
          <div>
            <button onClick={sortBooks}>Sort by name</button>
            <button onClick={unSortBooks}>Sort by default</button>
            <button onClick={daugiau}> daugiau nei 13 eu</button>
            <button onClick={reset}>visos knygos</button>
            <button onClick={reload}>reload</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
