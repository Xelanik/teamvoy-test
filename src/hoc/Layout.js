import React from 'react';
import Header from '../components/Header/Header';
import Pokemons from '../components/Pokemons/Pokemons';
import PokemonFullInfo from '../components/PokemonFullInfo/PokemonFullInfo';

class Layout extends React.Component {
  render(){
    return (
      <div className='wrapper'>
        <Header />
        <Pokemons />
        <PokemonFullInfo />
      </div>
    )
  }
}

export default Layout