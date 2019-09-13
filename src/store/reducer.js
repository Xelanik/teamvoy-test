import * as actionTypes from './actions'

const initialState = {
  url: 'https://pokeapi.co/api/v2/pokemon/?limit=12',
  typeUrl: 'https://pokeapi.co/api/v2/type/',
  pokemonList: '',
  typeList: '',
  typeFiler: '',
  nextLink: '',
  currentPokemon: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.SORT_BY_TYPE: 
      return {
        ...state,
        typeFiler: action.filtred
      }
  
    case actionTypes.SHOW_POKEMON_INFO:
      return {
        ...state,
        currentPokemon: {
          ...action.showInfo
        }
      };

    case actionTypes.GET_ALL_TYPES:
      return {
        ...state,
        typeList: [...action.typeList]
      };

    case actionTypes.GET_POKEMONS:
      return {
        ...state,
        pokemonList: [
          ...state.pokemonList,
          ...action.pokemonList
        ]
      };

    case actionTypes.GET_NEXT_LINK:
      return {
        ...state,
        nextLink: action.nextLink
      };

    case actionTypes.CLOSE_SHOW_POKEMON_INFO:
      return {
        ...state,
        currentPokemon: ''
      }

      default:
        return state
  }
}

export default reducer