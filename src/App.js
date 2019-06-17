import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrPokemon: []
    };
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=25";
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        data.results.map(itemPokemon => {
          return fetch(itemPokemon.url)
            .then(secondaryResponse => secondaryResponse.json())
            .then(secondaryData => {
              const finalArr = this.state.arrPokemon;
              finalArr.push(secondaryData);
              this.setState({
                arrPokemon: finalArr
              });
            });
        });
      });
  }

  render() {
    const arrPokemon = this.state.arrPokemon;
    return (
      <div className="App">
        <ul className="character_list">
          {arrPokemon
            // .filter(character =>
            //   character.name.toLowerCase().includes(inputValue.toLowerCase())
            // )
            .map(pokemon => {
              return (
                <li className="character" key={pokemon.id}>
                  <div className="character_image_container">
                    <img
                      className="character_image"
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                  </div>
                  <h2 className="character_name">{pokemon.name}</h2>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
