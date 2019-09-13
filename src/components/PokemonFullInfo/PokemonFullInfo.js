import React from 'react';
import TableRows from './TableRows/TableRows';

import './PokemonFullInfo.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions'

class PokemonFullInfo extends React.Component {
  render(){
    const { pokemon } = this.props;

    if( !pokemon ) return null

    
    const { name, id, stats, weight, moves, types } = pokemon;

    const formatedInfo = [
      {'Attack': stats[4].base_stat},
      {'Defense': stats[3].base_stat},
      {'HP': stats[5].base_stat},
      {'SP Attack': stats[2].base_stat},
      {'SP Defence': stats[1].base_stat},
      {'Speed': stats[0].base_stat},
      {'Weight': weight},
      {'Total moves': moves.length}
    ]

    return (  
      <div className={`PokemonFullInfo_Wrap_Gradient PokemonFullInfo_Wrap_Gradient--${types[0].type.name}`} onClick={this.props.close}>
        <div className='PokemonFullInfo_Wrap'>
          <div className='Image'>
            <img src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default} onLoad={this.onLoad}/> 
          </div>
          <div className='Info'>
            <h3 className='Title'>{name} #{id}</h3>
            <table>         
              <tbody>
                { formatedInfo.map( (el, key) => <TableRows key = {key} data = {el} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.currentPokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(actionCreators.close_show_pokemon_info())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFullInfo)