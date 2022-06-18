import { useContext } from 'react';
import Duomenys from '../Contexts/Duomenys';

function Bebras() {
  const { counter1, counter2 } = useContext(Duomenys);

  return (
    <div>
      <h1>{counter1}</h1>
      <h2>{counter2}</h2>
    </div>
  );
}

export default Bebras;
