const fetchPokemon = async (pokemon) => {
  const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResnponse.json();
  return data;
}


