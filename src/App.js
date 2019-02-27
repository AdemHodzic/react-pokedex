import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import CardContainer from './components/CardContainer';
import PokemonNavbar from './components/Navbar';
import PokemonDetails from './components/PokemonDetails';

import {AuthProvider} from './context/authContext';
import {AuthPage} from './pages/AuthPage'
const App = (props) =>  {
  return (
    <AuthProvider>
      <div className="app__container">
        <PokemonNavbar/>
        <Switch>
          <Route exact path='/' component={CardContainer}/>
          <Route path='/auth' component={AuthPage}/>
          <Route path='/pokemons/:id' component={PokemonDetails}/>
        </Switch>       
      </div>
    </AuthProvider>
  )
}

export default App;
