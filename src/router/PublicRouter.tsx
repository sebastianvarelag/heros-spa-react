import { useContext } from "react"
import { propsNode } from "../auth/types/types"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({children}: propsNode) => {

  const {state} = useContext(AuthContext);

  
  return (state.isLoggedIn)
      ? <Navigate to={"/"}/>
      : children
}
