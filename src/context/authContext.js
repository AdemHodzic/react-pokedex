import React, {useState} from 'react';
import axios from 'axios';

const AuthContext = React.createContext({auth: false, user: null});

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const api = 'http://localhost:8080';

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
      setError({message: e.message});
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        user: user,
        login: logIn,

      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}