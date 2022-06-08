import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to class</h1>
        <Counter when={'today'}></Counter>
      </header>
    </div>
  );
}

export default App;
