import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div className="input_container">
        <div className="label_container">
          <label className="label_input" htmlFor="inputPokemon">
            ¿A quién buscas?
          </label>
        </div>
        <input
          name="inputPokemon"
          className="input"
          type="text"
          onChange={this.props.getInput}
        />
      </div>
    );
  }
}

export default Filter;
