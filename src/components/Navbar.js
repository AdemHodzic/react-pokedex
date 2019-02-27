import React, {useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/authContext';

const StyledLink = styled(Link)`
  text-decoration: 'none';
  color: #111111;
  transition: 0.1s;
  &:hover {
    text-decoration: 'none';
    color: #007bff;
  }
`

const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PokemonNavbar = () => {

  const context = useContext(AuthContext)

  const logout = async () => await context.logOut() 

  const dropDown = () => {
    return context.auth ? (
      <Dropdown drop={'left'}>
        <Dropdown.Toggle>
          <FontAwesomeIcon icon={faUser}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item >
            <StyledLink style={{textDecoration: 'none'}} to="/profile">
              My Profile
            </StyledLink>
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    ) : (<span></span>)
  }

  return (
    <StyledNavbar bg="light" expand="lg">
      <NavbarBrand >
        <StyledLink to="/" style={{textDecoration: 'none'}}>Pokedex</StyledLink>
      </NavbarBrand>
      {dropDown()}
    </StyledNavbar>    
  )
}

export default PokemonNavbar
