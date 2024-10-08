import { useContext } from "react"
import { LayoutHero } from "../../heros/layout/LayoutHero"
import { ButtonCard } from "../../ui/components/ButtonCard"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login('User 1')
  }

  return (
    <LayoutHero title="Login">
        <div className="flex justify-center text-white">
          <span onClick={handleLogin}>
          <ButtonCard>
              Login
          </ButtonCard>
          </span>
        </div>
    </LayoutHero>
  )
}
