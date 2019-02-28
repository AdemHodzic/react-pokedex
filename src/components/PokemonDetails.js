import React, {useContext, useState, useEffect} from 'react'
import {Redirect} from 'react-router'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import styled from 'styled-components'
import { AuthContext } from '../context/authContext';
import Fetching from './Fetching'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const StyledLink = styled(Link)`
  text-decoration: 'none';
  color: #ffffff;
  transition: 0.1s;
  &:hover {
    text-decoration: 'none';
    color: #000000;
  }
`



const PokemonDetails = (props) => {
  const pokemonId = props.match.params.id;
  const api = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  const [pokemon, setPokemon] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const context = useContext(AuthContext)
  let statsTable;
  let typeTable;
  const fetchData = async () => {
    const req = await axios.get(api)
    const data = await req.data
    
    const moves = data['moves']
      .map(elem => elem.move.name.replace('-', ' '))
    const stats = data['stats']
      .map(elem => ({name: elem.stat.name, base: elem.base_stat}))
    const types = data['types']
      .map(elem => elem.type.name)

    const poke = {
      experience: data.base_experience,
      moves: moves,
      name: data.name,
      stats: stats,
      types: types,
      weight: data.weight,
      image: data.sprites.front_default
    }

    setPokemon(poke)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])


  if (!context.auth) {
    return <Redirect to="/auth" />
  }

  if (isLoading) {
    return <Fetching success={true}/>
  } else {
    console.log(pokemon)
    statsTable = pokemon.stats.map(stat => {
      return (
        <tr>
          <td>{stat.name}</td>
          <td>{stat.base}</td>
        </tr>
      )
    })
    typeTable = pokemon.types.map(type => {
      switch (type) {
        case 'fire':
          return <Badge variant="danger" style={{margin: '2%'}}>{type}</Badge>
        case 'grass':
        case 'bug':
          return <Badge variant="success" style={{margin: '2%'}}>{type}</Badge>
        case 'water':
        case 'ice':
          return <Badge variant="primary" style={{margin: '2%'}}>{type}</Badge>
        case 'electric':
          return <Badge variant="warning" style={{margin: '2%'}}>{type}</Badge>
        default:
          return <Badge variant="light" style={{margin: '2%'}}>{type}</Badge>
      }
    })
  }


  return (
    <StyledDiv>
      <Table striped bordered hover variant="dark" style={{width: '40%'}}>
        <thead>
          <Button variant="outline-light" size="lg" block style={{margin: '1%', width: '142%'}}>
            <StyledLink to="/" style={{textDecoration: 'none'}}>
              Back to All Pokemons
            </StyledLink>
          </Button>
          <Image src={pokemon.image} alt="Here is the image of pokemon" style={{minWidth: '100%'}}/>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{pokemon.name}</td>
          </tr>
          <tr>
            <td>Types</td>
            <td>{typeTable}</td>
          </tr>
          <tr>
            <td>Initial Experience</td>
            <td>{pokemon.experience}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{pokemon.weight}</td>
          </tr>
        </tbody>
        {statsTable}
      </Table>
    </StyledDiv>
  )
}

export default PokemonDetails