import React from "react";
import "../stylesheets/PokemonItem.scss";
import PropTypes from "prop-types";

class PokemonItem extends React.Component {
  render() {
    const { id, image, name, types, evolution } = this.props;
    return (
      <li className="pokemon" key={id}>
        <img className="pokemon__image" src={image} alt={name} />
        <h2 className="pokemon__name">{name}</h2>
        <p className="pokemon__evolution">Evolves from {evolution !== null ? evolution.name : ''}</p>
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
  types: PropTypes.array
};

export default PokemonItem;
