import React, {useState, useEffect, useContext} from 'react'
import PokemonCard from './Card';
import Fetching from './Fetching';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import {AuthContext} from '../context/authContext'
import {Redirect} from 'react-router'

const CardContainer = () => {
  const api = 'https://pokedex-232720.appspot.com/pokemons';

  const [pokemonCards, setPokemonCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [failedToFetch, setFailedToFetch] = useState(false);
  const context = useContext(AuthContext)

  const fetchData = async () => {
    try {
      let result = await axios(api);
      setPokemonCards(result.data.map(elem => <PokemonCard key={elem.id} id={elem.id} name={elem.name} image={'http://' + elem.image} />));
      setIsLoading(false);
    } catch (error) {
      setFailedToFetch(true);    
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  if (!context.auth) {
    return <Redirect to="/auth"/>
  }

  if (failedToFetch) {
    return <Fetching success={false} />
  }

  if (isLoading) {
    return <Fetching success={true} />
  }
  return (
    <Container>
      <Row>
        {pokemonCards}
      </Row>
    </Container>
  )
}

export default CardContainer;
