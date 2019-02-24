import React, {useState, useEffect} from 'react'
import PokemonCard from './Card';
import Fetching from './Fetching';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const CardContainer = () => {
  const api = 'http://localhost:8080/pokemons';
  

  const [pokemonCards, setPokemonCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [failedToFetch, setFailedToFetch] = useState(false);

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
  
  return (
    <div>
      {
        failedToFetch ? 
        (
          <Fetching success={false} />
        )
        :(
        isLoading ? (
          <Fetching success={true} />
        ) : (
          <Container>
            <Row>
              {pokemonCards}
            </Row>
          </Container>
        ))
      }
    </div>
  )
}

export default CardContainer;
