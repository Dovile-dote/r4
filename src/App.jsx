import './App.css';
import { useEffect, useReducer, useState, useRef } from 'react';
import numbersReducer from './Reducer/numbersReducer';

function App() {
  const [numbers, dispachNumbers] = useReducer(numbersReducer, []);
  const [numberInput, setNumberInput] = useState('');
  const [rangeInput, setRangeInput] = useState('0');
  const doRange = useRef(true);

  const addNr = () => {
    const action = {
      type: 'add_nr',
    };
    dispachNumbers(action);
  };

  const rusiuoti = () => {
    const action = {
      type: 'rusiavimas',
    };
    dispachNumbers(action);
  };

  const atrusiuoti = () => {
    const action = {
      type: 'atrusiavimas',
    };
    dispachNumbers(action);
  };

  const daugiau5000 = () => {
    const action = {
      type: 'daugiau',
    };
    dispachNumbers(action);
  };

  const maziau4000 = () => {
    const action = {
      type: 'maziau',
    };
    dispachNumbers(action);
  };

  const reset = () => {
    const action = {
      type: 'reset',
    };
    dispachNumbers(action);
  };

  const addBlack = () => {
    const action = {
      type: 'add_bl',
    };
    dispachNumbers(action);
  };

  const removeOne = (nr) => {
    const action = {
      type: 'rem',
      payload: nr,
    };
    dispachNumbers(action);
    console.log(nr);
  };

  const removeThis = () => {
    const action = {
      // type: 'remove_this',
      type: 'rem',
      payload: numberInput,
    };
    setNumberInput('');
    dispachNumbers(action);
  };

  // const filtracija = () => {
  //   const action = {
  //     type: 'filtracija',
  //     payload: rangeInput,
  //   };
  //   dispachNumbers(action);
  // };

  useEffect(() => {
    if (!doRange.current) {
      return;
    }
    doRange.current = false;
    setTimeout(() => (doRange.current = true), 50);

    const action = {
      type: 'filtracija',
      payload: rangeInput.padStart(4, 0),
    };
    dispachNumbers(action);
  }, [rangeInput]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>REDUCER</h1>
        <div className="flex">
          <button onClick={addNr}>ADD</button>
          <button onClick={rusiuoti}>rusiuoti</button>
          <button onClick={atrusiuoti}>atrusiuot</button>
        </div>

        <div className="flex">
          {numbers.map((o, i) =>
            o.show ? (
              <div
                key={i}
                onClick={() => removeOne(o.number)}
                className="kv"
                style={{ backgroundColor: o.color }}
              >
                {o.number}
              </div>
            ) : null
          )}
        </div>
        <div className="flex">
          <button onClick={daugiau5000}>brangus</button>
          <button onClick={maziau4000}>pigus</button>
          <button onClick={reset}>visi</button>
          <button onClick={addBlack}>add black</button>
        </div>
        <div className="flex">
          <input
            type="number"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            placeholder="add number"
          />
          <button onClick={removeThis}>remove this</button>
        </div>

        <div className="flex">
          <h2>{rangeInput.padStart(4, 0)}</h2>
          <input
            type="range"
            min="0"
            max="9999"
            value={rangeInput}
            onChange={(e) => setRangeInput(e.target.value)}
            // onChange={(e) => filtracija(e.target.value)}
          />
          {/* <button onClick={filtracija}>negyva filtracija</button> */}
        </div>
      </header>
    </div>
  );
}

export default App;
