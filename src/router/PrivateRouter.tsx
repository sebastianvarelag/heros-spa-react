import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";
import { propsNode } from "../auth/types/types";

export const PrivateRouter = ({children}: propsNode) => {

  const {state} = useContext(AuthContext);

  return (state.isLoggedIn)
        ? children
        : <Navigate to={'/auth/login'}/>
}