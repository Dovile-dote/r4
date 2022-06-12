import './App.css';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import booksReducer from './Reducer/booksReducer';

function App() {
  //   const [books, setBooks] = useState([]);
  const [books, dispachBooks] = useReducer(booksReducer, []);

  // useEffect(() => {
  //   axios.get('http://in3.dev/knygos/').then((res) => {
  //     setBooks(res.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get('http://in3.dev/knygos/').then((res) => {
      dispachBooks({ payload: res.data, type: 'get_from_server' });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOKS</h1>
        <div className="column">
          {books.length ? (
            books.map((b) => <div key={b.id}> {b.title}</div>)
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
