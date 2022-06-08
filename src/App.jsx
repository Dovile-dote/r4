import './App.css';
import { useReducer, useState } from 'react';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';
import textReducer from './Reducers/textReducer';
import kvReducer from './Reducers/kvReducer';
import rand from './Functions/rand';

function App() {
  //   const [color, setColor] = useState('yellow');
  const [color, dispachColor] = useReducer(colorReducer, 'yellow');
  const [numb, dispachNumb] = useReducer(numberReducer, '0000');
  //   const [colorBg, setColor] = useState('');
  const [colorInput, setColorInput] = useState('#F8dd00');
  const [textInput, setTextInput] = useState('');
  const [text, dispachText] = useReducer(textReducer, 'Textas');
  const [kv, dispachKv] = useReducer(kvReducer, []);

  //   const goPink = () => {
  //     setColor('pink');
  //   };

  const goPink = () => {
    const action = {
      type: 'go_pink',
    };
    dispachColor(action);
  };

  const goYellow = () => {
    const action = {
      type: 'go_y',
    };
    dispachColor(action);
  };

  const goCange = () => {
    const action = {
      type: 'change-color',
    };
    dispachColor(action);
  };

  //   const changeColorBg = () => {
  //     const action = {
  //       type: 'change-bg',
  //     };
  //     dispachColor(action);
  //   };

  const number1 = () => {
    const action = {
      type: 'do1',
    };
    dispachNumb(action);
  };

  const number2 = () => {
    const action = {
      type: 'do2',
      payload: rand(0, 100),
    };
    dispachNumb(action);
  };

  const goChangeTo = () => {
    const action = {
      type: 'change_color_to',
      payload: colorInput,
    };
    dispachColor(action);
  };

  const changeText = () => {
    const action = {
      type: 'change_text',
      payload: textInput,
    };
    dispachText(action);
  };
  //   useEffect = () => {
  //       setInterval(() => dipachColor({type: 'change_color'}), 3000)
  //   }

  const addKv = () => {
    const action = {
      type: 'add_kv',
      //   payload: textInput,
    };
    dispachKv(action);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ backgroundColor: color }}>
          Welcome to Reducer
          <span> {numb} </span>
        </h1>

        <div>
          <button onClick={goPink}>Go Pink</button>
          <button onClick={goYellow}>Go Yellow</button>
          <button onClick={goCange}>Go change</button>
          <div>
            <button onClick={number1}>New Number iki 1000</button>
            <button onClick={number2}>New Number iki 100</button>
          </div>
          <div>
            {/* <input type="color" onChange={(e) => setColor(e.target.value)} /> */}
            <input
              type="color"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
            />
            {/* <button
              onClick={changeColorBg}
              //   style={{ backgroundColor: colorBg }}
            >
              CHANGE BG
            </button> */}
            <button
              onClick={goChangeTo}
              //   style={{ backgroundColor: colorBg }}
            >
              CHANGE BG
            </button>
          </div>
          <div>
            <h2>{text}</h2>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />

            <button onClick={changeText}>Change Text</button>
          </div>
          <div>
            <h2>{text}</h2>
            <div className="flex">
              {kv.map((_, i) => (
                <div className="kvadratukas" key={i}></div>
              ))}
            </div>
            <button onClick={addKv}>Add</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
