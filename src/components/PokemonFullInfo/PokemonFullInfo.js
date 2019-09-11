import React from 'react';
import Style from './PokemonFullInfo.module.css';
import {connect} from 'react-redux';

class PokemonFullInfo extends React.Component {
  render(){
    const { pokemon } = this.props;

    if( !pokemon ) return null

    return (
      <div className={Style.PokemonFullInfo_Wrap}>

        <h3>PokemonFullInfo</h3>
        {console.log(this.props.pokemon)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.currentPokemon
  }
}

export default connect(mapStateToProps, null)(PokemonFullInfo)