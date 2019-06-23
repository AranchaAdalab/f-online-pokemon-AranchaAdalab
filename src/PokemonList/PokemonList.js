import React from "react";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PokemonList extends React.Component {
  render() {
    const { arrPokemon, inputValue } = this.props;
    return (
      <ul className="pokemon__list">
        {arrPokemon
          .filter(pokemon =>
            pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map(pokemon => {
            return (
              <Link className="pokemon__item_link" to={`/pokemon_detail/${pokemon.id}`} key={pokemon.id}>
                <PokemonItem 
                  id={pokemon.id}
                  key={pokemon.id}
                  image={pokemon.sprites.front_default}
                  name={pokemon.name}
                  types={pokemon.types}
                  evolutionFrom={pokemon.evolutionFrom}
                  evolutionToNameBaby={pokemon.evolutionToNameBaby}
                  evolutionToNameAdult={pokemon.evolutionToNameAdult}
                />
              </Link>
            );
          })}
      </ul>
    );
  }
}

PokemonList.propTypes = {
  arrPokemon: PropTypes.array,
  inputValue: PropTypes.string
};

export default PokemonList;
