import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 100%;
`

export const AuthPage = (props) => {

  return (
    <StyledDiv>
      <Switch>
          <Route path='/auth/register' component={RegisterPage}/>
          <Route path='/auth' component={LoginPage}/>
      </Switch> 
    </StyledDiv>
  )
}

