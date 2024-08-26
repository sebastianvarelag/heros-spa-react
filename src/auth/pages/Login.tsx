import { useContext } from "react"
import { LayoutHero } from "../../heros/layout/LayoutHero"
import { ButtonCard } from "../../ui/components/ButtonCard"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login('User')
  }

  return (
    <LayoutHero title="Login">
        <div className="flex justify-center text-white">
          <ButtonCard>
            <span onClick={handleLogin}>
              Login
            </span>
          </ButtonCard>
        </div>
    </LayoutHero>
  )
}
