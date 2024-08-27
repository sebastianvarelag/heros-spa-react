
import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { propsNode } from "../types/types"

const initialState = {
  isLoggedIn: false,
  user: undefined,
};

const init = () =>{
  let user = localStorage.getItem('user');
  if(typeof user === 'string'){
    user = JSON.parse(user);
    return{
      isLoggedIn: true,
      user: user
    }
  }
  return{
    isLoggedIn: false,
    user: undefined
  }
}


export const AuthProvider = ({children}: propsNode) => {

  const [state, dispatch] = useReducer(authReducer, initialState, init)

  const login = (name: string = '') =>{
    const user = {
      id: 'ABC123', 
      username: name
    } 
    
    dispatch({type: 'LOGIN', user});
    
    localStorage.setItem('user', JSON.stringify(user));
  }

  const logout = () => {
    dispatch({type: 'LOGOUT' });

    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{
      state,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
