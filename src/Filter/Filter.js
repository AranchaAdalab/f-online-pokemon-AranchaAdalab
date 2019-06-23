import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

class Filter extends React.Component {
  render() {
    const { getInput } = this.props;
    return (
      <div className="input_container">
        <label className="label_input" htmlFor="inputPokemon">
          ¿A quién buscas?
        </label>
        <input
          name="inputPokemon"
          className="input"
          type="text"
          onChange={getInput}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  getInput: PropTypes.func
};

export default Filter;
