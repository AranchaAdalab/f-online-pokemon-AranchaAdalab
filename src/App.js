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
                  console.log(thirdData);
                  const superFinalArr = [];
                  const evolutionFrom = thirdData.evolves_from_species;
                  const evolutionToUrl = thirdData.evolution_chain.url;
                  
                  const pokEvolution = {
                    ...item,
                    evolutionFrom: evolutionFrom,
                    evolutionToUrl: evolutionToUrl
                  };
                  superFinalArr.push(pokEvolution);
                  superFinalArr.map(item => {
                    return fetch(item.evolutionToUrl)
                      .then(fourthResponse => fourthResponse.json())
                      .then(fourthData => {
                        const reSuperFinalArr = this.state.arrPokemon;
                        const evolutionToNameBaby = fourthData.chain.evolves_to[0];
                        const evolutionToNameAdult = fourthData.chain.evolves_to[0].evolves_to[0];
                        const pokAllEvolution = {
                          ...item,
                          evolutionToNameBaby: evolutionToNameBaby, evolutionToNameAdult: evolutionToNameAdult
                        };
                        reSuperFinalArr.push(pokAllEvolution);
                        reSuperFinalArr.sort((a, b) => a.id - b.id);
                        this.setState({
                          arrPokemon: reSuperFinalArr
                        });
                      });
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
