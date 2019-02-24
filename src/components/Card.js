import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Card.css';


const StyledLink = styled(Link)`
  text-decoration: 'none';
  color: #ffffff;
`
const StyledButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: #ffffff;
    ${StyledLink} {
      text-decoration: 'none';
      color: #007bff;
    }
  }
`

const CenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PokemonCard = (props) =>  {
  
  const pokemonName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  const pokemonDetailsUrl = `/pokemons/${props.id}`
  return (
    <Card style={{width: '18rem', margin: '1rem', color: 'black'}}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <CenterVertical>
          <Card.Title>{pokemonName}</Card.Title>
          <StyledButton variant="primary">
            <StyledLink to={pokemonDetailsUrl} style={{textDecoration: 'none'}}>
              Details
            </StyledLink>
          </StyledButton>
        </CenterVertical>
      </Card.Body>
    </Card>
  )
}


export default PokemonCard