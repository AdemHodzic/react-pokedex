import React from 'react'

const PokemonDetails = (props) => {
  const pokemonId = props.match.params.id;
  return (
    <div>
      Pokemon Details: {pokemonId}
    </div>
  )
}

export default PokemonDetails