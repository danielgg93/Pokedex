
export const searchPokemon = async (pokeName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const data = await response.json();
  return data
}


export const getPokemons = async (limit=10,offset=0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data
}

export const getPokemonsData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data
}
