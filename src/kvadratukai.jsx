import './App.css';
import { useEffect, useState } from 'react';
import rand from './Functions/rand';

function App() {
  const [kv, setKv] = useState(null);

  let kiek = 0;
  const add = () => {
    for (let i = 0; i <= rand(5, 10); i++) {
      setKv((k) => [...k, kv]);
      kiek += 1;
    }
    console.log(kiek);
  };

  const remove = () => {
    setKv((k) => k.slice([]));
  };

  useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
  }, []);

  useEffect(() => {
    if (null === kv) {
      return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
  }, [kv]);

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h2>Kvadratukai</h2>
          <div className="flex">
            {kv
              ? kv.map((k, i) => (
                  <div className="kvadratukas" key={i}>
                    {k}
                  </div>
                ))
              : null}
          </div>
          <div>
            <button onClick={add}>add</button>
            <button onClick={remove}>remove</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
