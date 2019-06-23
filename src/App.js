import React from "react";
import Filter from "./components/Filter";
import PokemonList from "./components/PokemonList";
import { fetchPokemon } from "./components/Petition";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrPokemon: [],
      inputValue: ""
    };
    this.getPokemon = this.getPokemon.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    fetchPokemon().then(data => {
      data.results.map(itemPokemon => {
        return fetch(itemPokemon.url)
          .then(secondaryResponse => secondaryResponse.json())
          .then(secondaryData => {
            const finalArr = [];
            finalArr.push(secondaryData);
            finalArr.map(item => {
              return fetch(item.species.url)
                .then(thirdResponse => thirdResponse.json())
                .then(thirdData => {
                  const superFinalArr = this.state.arrPokemon;
                  const evolution = thirdData.evolves_from_species;
                  const pokEvolution = {
                      ...item, evolution: evolution
                    };
                    superFinalArr.push(pokEvolution)
                    superFinalArr.sort((a, b) => a.id - b.id);
                  this.setState({
                    arrPokemon: superFinalArr
                  });
                });
            });
          });
      });
    });
  }

  getInput(event) {
    const guilty = event.currentTarget.value;
    this.setState({
      inputValue: guilty
    });
  }

  render() {
    const { arrPokemon, inputValue } = this.state;
    return (
      <div className="App">
        <Filter getInput={this.getInput} />
        <PokemonList arrPokemon={arrPokemon} inputValue={inputValue} />
      </div>
    );
  }
}

export default App;
