import React from "react";
import PokemonItem from "./PokemonItem";
import "../stylesheets/PokemonList.scss";

class PokemonList extends React.Component {
  render() {
      const {arrPokemon, inputValue} = this.props;
    return (
      <ul className="pokemon__list">
        {arrPokemon
          .filter(pokemon =>
            pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map(pokemon => {
            return (
              <PokemonItem 
              id={pokemon.id}
              image={pokemon.sprites.front_default}
              name={pokemon.name}
              types={pokemon.types}/>
            );
          })}
      </ul>
    );
  }
}

export default PokemonList;
