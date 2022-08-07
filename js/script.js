const pokemon_name = document.querySelector('.pokemon__name');
const pokemon_number = document.querySelector('.pokemon__number');
const pokemon_img = document.querySelector('.pokemon__image');

const fetchPokemon = async (pokemon) => {
  const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResnponse.json();
  return data;
}

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemon_name.innerHTML = data.name;
  pokemon_number.innerHTML = data.id;
  pokemon_img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon('99');
