import React, {useContext} from 'react'
import { AuthContext } from '../context/authContext';
import {Redirect} from 'react-router'

const PokemonDetails = (props) => {
  const pokemonId = props.match.params.id;
  const context = useContext(AuthContext)

  if (!context.auth) {
    return <Redirect to="/auth" />
  }
  return (
    <div>
      Pokemon Details: {pokemonId}
    </div>
  )
}

export default PokemonDetails