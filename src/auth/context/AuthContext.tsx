import { createContext} from "react"
import { State } from "../types/types";

export type AuthContextProps = {
  state: State,
  login: (name: string) => void,
  logout: () => void,
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);