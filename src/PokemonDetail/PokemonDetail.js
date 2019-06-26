import React from "react";
import "./PokemonDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PokemonDetail extends React.Component {
  render() {
    const {
      getReset,
      id,
      sprites,
      name,
      types,
      height,
      weight,
      abilities,
      evolutionFrom,
      evolutionToNameBaby,
      evolutionToNameAdult
    } = this.props;
    return (
      <div className="card__link">
        <div className="container__detail">
          <h2 className="pokemon__name_detail">{name}</h2>
          <div className="title__name_information">
            <div className="images">
              <img
                className="pokemon__image_detail"
                src={sprites.front_default}
                alt={name}
              />
              <img
                className="pokemon__image_detail"
                src={sprites.back_default}
                alt={name}
              />
            </div>
            <ul className="pokemon__types_detail">
              {types.map((pokemonType, index) => {
                return (
                  <li className="type_detail" key={index}>
                    {pokemonType.type.name}
                  </li>
                );
              })}
            </ul>
            <p className="pokemon__id_detail">#{id}</p>
          </div>
          <h2 className="pokemon__profile_detail">profile</h2>
          <div className="title__profile_information">
            <p className="pokemon__height_detail">Height: {height}</p>
            <p className="pokemon__weight_detail">Weight: {weight}</p>
            <ul className="pokemon__abilities_detail">
              Abilities:
              {abilities.map((pokemonAbility, index) => {
                return (
                  <li className="ability_detail" key={index}>
                    {pokemonAbility.ability.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <h2 className="pokemon__evolutions_detail">evolutions</h2>
          <div className="title__evolutions_information" />
          <p className="pokemon__evolutionFrom_detail">
            {evolutionFrom !== null && evolutionToNameAdult !== undefined
              ? `Evolves from ${evolutionFrom.name}`
              : ""}
          </p>
          <p className="pokemon__evolutionToNameBaby_detail">
            {evolutionFrom === null && evolutionToNameBaby !== undefined
              ? `Evolves to ${evolutionToNameBaby.species.name}`
              : ""}
          </p>
          <p className="pokemon__evolutionToNameAdult_detail_detail">
            {evolutionFrom !== null &&
            evolutionToNameAdult !== undefined &&
            evolutionToNameAdult.species.name !== name
              ? `Evolves to ${evolutionToNameAdult.species.name}`
              : ""}
          </p>
        </div>
        <Link className="pokemon__item_link" to="/">
          <i className="fas fa-arrow-circle-left" onClick={getReset} />
        </Link>
      </div>
    );
  }
}

PokemonDetail.propTypes = {
  arrPokemon: PropTypes.array,
  getReset: PropTypes.func
};

export default PokemonDetail;
