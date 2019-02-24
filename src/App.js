import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import CardContainer from './components/CardContainer';
import PokemonNavbar from './components/Navbar';
import PokemonDetails from './components/PokemonDetails';

const App = (props) =>  {
  
  return (
    <div className="app__container">
      <PokemonNavbar/>
      <Switch>
        <Route exact path='/' component={CardContainer}/>
        <Route path='/pokemons/:id' component={PokemonDetails}/>
      </Switch>       
    </div>
  )
}

export default App;
