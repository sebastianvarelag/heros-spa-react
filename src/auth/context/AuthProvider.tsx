
import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { propsNode } from "../types/types"

const initialState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider = ({children}: propsNode) => {

  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (name: string = '') =>{
    dispatch({type: 'LOGIN', user: {id: 'ABC123' , username: name} });
    console.log('Logged');
    
  }

  const logout = () => {
    dispatch({type: 'LOGOUT' });
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
