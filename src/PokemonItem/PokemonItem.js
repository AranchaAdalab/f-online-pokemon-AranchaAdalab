import React from "react";
import "./PokemonItem.scss";
import PropTypes from "prop-types";

class PokemonItem extends React.Component {
  render() {
    const { id, image, name, types, evolutionFrom, evolutionToNameBaby, evolutionToNameAdult } = this.props;
    return (
      <li className="pokemon" key={id}>
        <img className="pokemon__image" src={image} alt={name} />
        <h2 className="pokemon__name">{name}</h2>
        <p className="pokemon__evolutionFrom">{evolutionFrom !== null && evolutionToNameAdult !== undefined ? `Evolves from ${evolutionFrom.name}` : ''}</p>
        <p className="pokemon__id">ID/{id}</p>
        <ul className="pokemon__types">
          {types.map((pokemonType, index) => {
            return (
              <li className="type" key={index}>
                {pokemonType.type.name}
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}

PokemonItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  evolutionFrom: PropTypes.object,
  evolutionToNameBaby: PropTypes.object,
  evolutionToNameAdult: PropTypes.object
};

export default PokemonItem;
