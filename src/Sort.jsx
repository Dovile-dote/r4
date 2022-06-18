import { useEffect, useReducer, useState } from 'react';
import './App.css';
import ld from './Reducer/ld';

const masyvas = [
  { id: 3, name: 'Peter', bid: 487.77, date: 'December 17, 2022 03:24:00' },
  { id: 7, name: 'Mary', bid: 125.33, date: 'March 17, 2022 03:24:00' },
  { id: 8, name: 'Ązuolas', bid: 78.25, date: '3/1/22' },
  { id: 9, name: 'Petras Dainorius', bid: 487.77, date: '2022-06-01T08:13' },
];

function App() {
  const [list, dispachList] = useReducer(ld, masyvas);
  const [select, setSelect] = useState('bid_desc');

  useEffect(() => {
    dispachList({ type: select });
  }, [select]);
  //   use efektas suveikia kai pasikeicia selektas

  return (
    <div className="App">
      <header className="App-header">
        <h1>koks nors sortas</h1>
        <div className="flex">
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value="date_asc">DATE ASC</option>
            <option value="date_desc">DATE DESC</option>
            <option value="bid_asc">BID ASC</option>
            <option value="bid_desc">BID DESC</option>
            <option value="name_asc">NAME ASC</option>
            <option value="name_desc">NAME DESC</option>
            <option value="name_asc_local">NAME ASC LOCAL</option>
            <option value="random">RAND</option>
          </select>
        </div>
        <div className="column">
          {list.map((b) => (
            <div>
              <span>ID: {b.id}</span>
              <span>Name: {b.name}</span>
              <span>BID: {b.bid}</span>
              <span>Date: {b.date}</span>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
