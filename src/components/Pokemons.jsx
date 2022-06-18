import { useState } from 'react';
import Pokemon from './Pokemon';

function Pokemons() {
  const [pokemon, setPokemon] = useState([]);

  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
      });
  };
  getData();

  return (
    <>
      {pokemon.map((p, i) => (
        <Pokemon pokemon={p} key={i}></Pokemon>
      ))}
    </>
  );
}

export default Pokemons;
