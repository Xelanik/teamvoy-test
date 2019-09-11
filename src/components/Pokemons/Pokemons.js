import React, { Component }from 'react';
import Pokemon from './Pokemon/Pokemon';
import Style from './Pokemons.module.css';
import Loader from '../Loader/Loader';

import {connect} from 'react-redux';
import * as actionType from '../../store/actions'

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

class Pokemons extends Component {
  
  state = {
    pokemonList: [],
    next: ''
  }
  
  componentDidMount(){
    this.fetchPokemons(URL)   
  }

  loadMore = () => {
    this.fetchPokemons(this.state.next)  
  }

  fetchPokemons = url => {
    const getPokemonList = async url => {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }

    (async () => {
      let pokemonList = await getPokemonList(url);
      
      if(pokemonList.next !== 0) this.setState({next: pokemonList.next})

      let newList = [ ...this.state.pokemonList, ...pokemonList.results]

      this.setState({pokemonList: newList})
    })();
  }
  
  render(){
    if(this.state.pokemonList.length !== 0){
      return (
        <main className={Style.Main}>
          <div className={Style.PokemonList}>
            { this.state.pokemonList.map(el => <Pokemon key = {el.name} name = {el.name} url = {el.url} clicked = {this.props.showPokemonInfo}/>) }
          </div>

          <button className={Style.LoadMore} onClick={this.loadMore}>Load More ...</button> 
        </main>
      )   
    } else {
      return <Loader />
    }
  }
}

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemonList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showPokemonInfo: (pokemoInfo) => dispatch({type: actionType.SHOW_POKEMON_INFO, showInfo: pokemoInfo})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons)