import React from 'react'
import Style from './Pokemon.module.css';
import Loader from '../../Loader/Loader';

class Pokemon extends React.Component {
  
  state = {
    pokemonInfo: '',
    didLoad: false
  }

  onLoad = () => {
    const didLoad = true;
    this.setState({didLoad: didLoad})
  }

  componentDidMount(){
    const getPokemonInfo = async url => {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }

    (async () => {
      const pokemonInfo = await getPokemonInfo(this.props.url);
      this.setState({pokemonInfo: pokemonInfo})
    })();
  }

  onClickHandler = () => {
    this.props.clicked(this.state.pokemonInfo)
  }

  render(){
    if(Object.keys(this.state.pokemonInfo).length !== 0) {        
      const { name } = this.props;
      const { sprites: {front_default}} = this.state.pokemonInfo;
      const types = this.state.pokemonInfo.types.reverse();

      return (
        <div className={Style.PokemonWrap} onClick={this.onClickHandler}>
          <div className={Style.Image}>
            { !this.state.didLoad ? <Loader /> : null } 
            <img src={front_default} alt={front_default} onLoad={this.onLoad}/> 
          </div>   

          <h4 className={Style.PokemonName}>{name}</h4>

          <div className={Style.Types}>
            { types.map(type => {
              const typeName = type.type.name;
              return ( <div key={typeName} className={`type ${typeName}`}>{typeName}</div> )
            })}
          </div>
        </div>
      )
    } else {
      return <Loader />
    } 
  }
}

export default Pokemon