import React from "react";
import Home from "../Home";
import PokemonDetail from "../PokemonDetail/PokemonDetail";
import { fetchPokemon } from "../Services/Petition";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

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
                        const evolutionToNameBaby =
                          fourthData.chain.evolves_to[0];
                        const evolutionToNameAdult =
                          fourthData.chain.evolves_to[0].evolves_to[0];
                        const pokAllEvolution = {
                          ...item,
                          evolutionToNameBaby: evolutionToNameBaby,
                          evolutionToNameAdult: evolutionToNameAdult
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                getInput={this.getInput}
                arrPokemon={arrPokemon}
                inputValue={inputValue}
              />
            )}
          />
          <Route
            path="/pokemon_detail/:id"
            render={routerProps => (
              <PokemonDetail
                match={routerProps.match}
                arrPokemon={arrPokemon}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
