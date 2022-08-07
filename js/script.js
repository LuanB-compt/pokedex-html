const pokemon_name = document.querySelector('.pokemon__name');
const pokemon_number = document.querySelector('.pokemon__number');
const pokemon_img = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const btn_prev = document.querySelector('.btn-prev');
const btn_next = document.querySelector('.btn-next');

let search_pokemon = 1;

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
    pokemon_img.style.display = 'block';
    pokemon_name.innerHTML = data.name;
    pokemon_number.innerHTML = data.id;
    pokemon_img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    search_pokemon = data.id;
  } else {
    pokemon_img.style.display = 'none';
    pokemon_name.innerHTML = 'Not Found bro :c';
    pokemon_number.innerHTML = '';
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

btn_prev.addEventListener('click', () => {
  if (search_pokemon > 1) {
    search_pokemon -= 1;
    renderPokemon(search_pokemon);
  }
})

btn_next.addEventListener('click', () => {
  search_pokemon += 1;
  renderPokemon(search_pokemon);
});

renderPokemon(search_pokemon);
