const pokemon_name = document.querySelector('.pokemon__name');
const pokemon_number = document.querySelector('.pokemon__number');
const pokemon_img = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');


const fetchPokemon = async (pokemon) => {
  const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (APIResnponse.status == 200) {
    const data = await APIResnponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {
  pokemon_name.innerHTML = 'Loading ...';
  pokemon_number.innerHTML = '';
  const data = await fetchPokemon(pokemon);
  if (data) {
    pokemon_name.innerHTML = data.name;
    pokemon_number.innerHTML = data.id;
    pokemon_img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
  } else {
    pokemon_name.innerHTML = 'Not Found bro :c';
    pokemon_number.innerHTML = '';
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});
