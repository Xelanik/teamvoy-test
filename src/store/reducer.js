import * as actionTypes from './actions'

const initialState = {
  pokemonList: '',
  currentPokemon: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_POKEMON_INFO:
      return {
        ...state,
        currentPokemon: { ...action.showInfo }
      };
    default:
      return state
  }
}

export default reducer