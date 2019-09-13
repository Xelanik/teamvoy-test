import React, { Component }from 'react';
import Pokemon from './Pokemon/Pokemon';
import Style from './Pokemons.module.css';
import Loader from '../Loader/Loader';

import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';

class Pokemons extends Component {
  
  componentDidMount(){
    this.props.getPokemons(this.props.url)
    this.props.getTypes(this.props.typeUrl)
  }

  onChangeHandler = (event) => {
    this.props.sortBy(event.target.value)
  }

  render(){
    const {pokemonList, nextLink, getPokemons, typeList} = this.props;

    if(pokemonList && typeList) {

      const pokeList = pokemonList.map(el => {
        return (
          <Pokemon 
            key = {el.name} 
            name = {el.name} 
            url = {el.url} 
            clicked = {this.props.showPokemonInfo}/>
          )
        }
      );

      return (
        <main className={Style.Main}>
          <div className={Style.Select}>
            <select onChange={this.onChangeHandler}>
              <option value='0'>Sort by type</option>
              { typeList.map( type => <option key = {type.name} value = {type.name}>{type.name}</option>)}}
            </select>
          </div>
          <div className={Style.PokemonList}>
            { pokeList }
          </div>

          <button 
            className={Style.LoadMore} 
            onClick={() => getPokemons(nextLink)}> <div className={Style.PokeballCenter}><div className={Style.PokeballCenter_small}></div></div> Load More ... 
          </button> 
        </main>
      )   
    } else {
      return <Loader />
    }
  }
}

const mapStateToProps = ({url, pokemonList, nextLink, typeUrl, typeList}) => ({url, pokemonList, nextLink, typeUrl, typeList});

const mapDispatchToProps = dispatch => {
  return {
    sortBy: type => dispatch(actionCreators.sort(type)),
    getPokemons: url => dispatch(actionCreators.get_pokemon(url)),
    showPokemonInfo: (pokemonInfo) => dispatch(actionCreators.show_pokemon_info(pokemonInfo)),
    getTypes: url => dispatch(actionCreators.get_all_types(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons)