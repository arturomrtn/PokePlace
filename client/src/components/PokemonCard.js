import React from 'react'

const PokemonCard = (props) => {
    const { allPokemon } = props;
    return (
        <div key={allPokemon.name}>
            <div>
                <h1>Name: {allPokemon.name} </h1>
                <h1>Weight: {allPokemon.weight} </h1>
            </div>
        </div>
    );
}

export default PokemonCard;