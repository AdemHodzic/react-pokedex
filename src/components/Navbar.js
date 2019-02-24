import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: 'none';
  color: #111111;
  transition: 0.1s;
  &:hover {
    text-decoration: 'none';
    color: #007bff;
  }
`

const PokemonNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <NavbarBrand >
        <StyledLink to="/" style={{textDecoration: 'none'}}>Pokedex</StyledLink>
      </NavbarBrand>
    </Navbar>    
  )
}

export default PokemonNavbar
