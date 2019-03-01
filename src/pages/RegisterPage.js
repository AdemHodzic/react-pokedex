import React, {useState, useContext, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import styled from 'styled-components'
import { AuthContext } from '../context/authContext';

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10%;
  background-color: #ffffff;
  align-items: center;
  border-radius: 5%;
  @media screen and (max-width: 630px) {
    width: 90%;
  }
`

const StyledTitle = styled.h3`
  color: #007bff;
  padding-top: 5%;
  @media screen and (max-width: 630px) {
    font-size: 14px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const StyledLink = styled(Link)`
  text-decoration: 'none';
  color: #ffffff;
  height: 100vh;
  &:hover {
    color: #ffffff;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledForm = styled(Form)`
  padding: 10%;
`

const StyledButton = styled(Button)`
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.15);
  }
  @media screen and (max-width: 630px) {
    font-size: 12px;
  }
`

const RegisterPage = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState(null)
  const context = useContext(AuthContext)

  useEffect(() => {
    setError(null)
    setUsername('')
    setPassword('')
  }, [])

  const handleChangeUsername = (event) => setUsername(event.target.value) 
  const handleChangePassword = (event) => setPassword(event.target.value) 
  const handleChangePasswordConfirm = (event) => setPasswordConfirm(event.target.value) 
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== passwordConfirm) {
      setError(new Error('Passwords do not match.'))
      return
    }

    if(password.length === 0 || passwordConfirm.length === 0 || username.length === 0) {
      setError(new Error('Fields cannot be left empty.'))
      return
    }
    await context.register(username, password)
    setError(context.error)
  }


  if (context.auth) {
    return <Redirect to="/" />
  }

  return (
    <StyledDiv>
      <FormDiv>
        <StyledTitle>Welcome back, trainer!</StyledTitle>
        {
          error ? <Alert variant="danger">{error.message}</Alert> : <span></span>
        }
        <StyledForm onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="Username" onChange={handleChangeUsername} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" onChange={handleChangePassword}/>
          </Form.Group>
          <Form.Group controlId="password-confirm">
            <Form.Control type="password" placeholder="Password" onChange={handleChangePasswordConfirm}/>
          </Form.Group>
          <StyledButtonContainer>
            <StyledButton variant="primary" type="submit">Register</StyledButton>
            <StyledButton variant="success" >
              <StyledLink style={{textDecoration: 'none'}} to="/auth">
                Already a member?
              </StyledLink>
            </StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </FormDiv>
    </StyledDiv>
  )
}

export default RegisterPage
