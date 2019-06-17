import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  constructor (props) {
    super(props);
    this.state = {
      arrPokemon: []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const newArr = data.map((character, index) => {
        const patronus = character.patronus.charAt(0).toUpperCase() + character.patronus.slice(1)
        const house = character.house === '' ? 'Ninguna' : character.house
        return { ...character, id: `hogwartsid-${index}`, patronus: patronus, house: house };
      });
      this.setState({
        arrPokemon: newArr,
      })
    });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
