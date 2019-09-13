export const SHOW_POKEMON_INFO = 'SHOW_POKEMON_INFO';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_NEXT_LINK = 'GET_NEXT_LINK';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const CLOSE_SHOW_POKEMON_INFO = 'CLOSE_SHOW_POKEMON_INFO';
export const SORT_BY_TYPE = 'SORT_BY_TYPE';

export const sort = (value) => {
  return {
    type: SORT_BY_TYPE,
    filtred: value
  }
} 

export const get_all_types = (url) => {
  return dispatch => {
    const getTypes = async url => {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }

    (async () => {
      let typesList = await getTypes(url);
      dispatch(get_all_types_success(typesList.results));
    })();
  }
}

export const get_all_types_success = (types) => {
  return {
    type: GET_ALL_TYPES,
    typeList: types
  }
}

export const close_show_pokemon_info = () => {
  return {
    type: CLOSE_SHOW_POKEMON_INFO,
  }
}

export const pokemon_loaded_success = (pokemonList) => {
  return {
    type: GET_POKEMONS,
    pokemonList: pokemonList
  }
}

export const get_next_link = link => {
  return {
    type: GET_NEXT_LINK,
    nextLink: link
  }
}

export const get_pokemon = (url) => {
  return dispatch => {
    const getPokemonList = async url => {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }

    (async () => {
      let pokemonList = await getPokemonList(url);
      dispatch(pokemon_loaded_success(pokemonList.results));
      dispatch(get_next_link(pokemonList.next))
    })();
  }
}

export const show_pokemon_info = (pokemon) => {
  return {
    type: SHOW_POKEMON_INFO,
    showInfo: pokemon
  }
}