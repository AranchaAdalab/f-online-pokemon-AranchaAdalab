import React from "react";

class PokemonDetail extends React.Component {
    render() {
        const { arrPokemon } = this.props;
        const pokemonId = this.props.match.params.id;
        const pokemonCard = arrPokemon.find(item => item.id === parseInt(pokemonId));
        return (
            <div className="container__detail">
                <div className="title__name_container">
                    <p className="title__name">{pokemonCard.name}</p>
                </div>
            </div>
        )
    }
}

export default PokemonDetail;