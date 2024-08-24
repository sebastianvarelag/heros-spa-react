
import { AuthContext } from "./AuthContext"

type props = {
  children: React.ReactNode
}

export const AuthProvider = ({children}: props) => {
  return (
    <AuthContext.Provider value={{

    }}>
      {children}
    </AuthContext.Provider>
  )
}
