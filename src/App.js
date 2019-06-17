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
            const finalArr = this.state.arrPokemon;
            finalArr.push(secondaryData);
            finalArr.sort((a, b) => a.id - b.id);
            this.setState({
              arrPokemon: finalArr
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
