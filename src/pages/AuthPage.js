import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

export const AuthPage = (props) => {

  return (
    <div>
      <Switch>
          <Route path='/auth/register' component={RegisterPage}/>
          <Route path='/auth' component={LoginPage}/>
      </Switch> 
    </div>
  )
}

