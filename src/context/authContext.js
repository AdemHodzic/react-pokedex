import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({
  auth: false, 
  user: null,
  error: null,
  logIn: (name, password) => {},
  register: (name, password) => {},
  logOut : () => {}
});

export const AuthProvider = (props) => {
  const api = 'http://localhost:8080';
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lAuth = localStorage.getItem('auth')
    const lUser = localStorage.getItem('user')
    setIsAuth(lAuth)
    setUser(lUser)
  }, [])

  const logIn = async (name, password) => {
    try {
      const request = await axios.post(api + '/login', {name,password})
      
      if (request.status !== 200) {
        throw new Error(request.data.error)
      }
      const data = await request.data;
      setUser(data.user);
      setIsAuth(data.auth);
    } catch (e) {
      setError(e);
      setIsAuth(false)
    }
  }

  const register= async (name, password) => {
    try {
      const request = await axios.post(api + '/register', {name,password})
      if (request.status !== 200) {
        throw new Error(request.data.error)
      }
      const data = await request.data;
      setUser(data.user);
      setIsAuth(data.auth);
    } catch (e) {
      setError(e)
      setIsAuth(false)
    }
  }

  const logOut = async () => {
    const request = await axios.get(api + '/logout');
    const data = await request.data;
    setUser(data.user);
    setIsAuth(data.auth);
  }

  return (
    <AuthContext.Provider
      value={{
        auth: isAuth,
        user: user,
        error: error,
        logIn: logIn,
        register: register,
        logOut: logOut
      }}
      style={{height: '100%'}}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

