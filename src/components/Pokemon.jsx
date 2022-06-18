function Pokemon({ pokemon }) {
  return (
    <div>
      {' '}
      <p>
        <b>{pokemon.name}</b>
      </p>
      <a href="/">{pokemon.url}</a>
    </div>
  );
}

export default Pokemon;
