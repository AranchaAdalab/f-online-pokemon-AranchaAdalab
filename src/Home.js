import React from "react";
import Filter from "./Filter/Filter";
import PokemonList from "./PokemonList/PokemonList";

class Home extends React.Component {
  render() {
    const { getInput, arrPokemon, inputValue } = this.props;
    return (
      <React.Fragment>
        <h1 className="title">Pokédex</h1>
        <Filter getInput={getInput} />
        <PokemonList arrPokemon={arrPokemon} inputValue={inputValue} />
      </React.Fragment>
    );
  }
}

export default Home;
