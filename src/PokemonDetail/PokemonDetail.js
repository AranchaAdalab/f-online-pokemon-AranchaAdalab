import React from "react";
import "./PokemonDetail.scss";
import { Link } from "react-router-dom";

class PokemonDetail extends React.Component {
  render() {
    const { arrPokemon, getReset } = this.props;
    const pokemonId = this.props.match.params.id;
    const pokemonCard =
      arrPokemon.length &&
      arrPokemon.find(item => item.id === parseInt(pokemonId));
    const id = pokemonCard.id;
    const frontImage = pokemonCard.sprites.front_default;
    const backImage = pokemonCard.sprites.back_default;
    const name = pokemonCard.name;
    const types = pokemonCard.types;
    const height = pokemonCard.height;
    const weight = pokemonCard.weight;
    const abilities = pokemonCard.abilities;
    const evolutionFrom = pokemonCard.evolutionFrom;
    const evolutionToNameBaby = pokemonCard.evolutionToNameBaby;
    const evolutionToNameAdult = pokemonCard.evolutionToNameAdult;
    return (
      <React.Fragment>
        {pokemonCard ? (
          <div className="card__link">
            <div className="container__detail">
              <h2 className="pokemon__name_detail">{name}</h2>
              <div className="title__name_information">
                <div className="images">
                  <img
                    className="pokemon__image_detail"
                    src={frontImage}
                    alt={name}
                  />
                  <img
                    className="pokemon__image_detail"
                    src={backImage}
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
        ) : (
          <p className="loading">Cargando datos</p>
        )}
      </React.Fragment>
    );
  }
}

export default PokemonDetail;
