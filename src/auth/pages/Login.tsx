import { LayoutHero } from "../../heros/layout/LayoutHero"
import { ButtonCard } from "../../ui/components/ButtonCard"

export const Login = () => {
  return (
    <LayoutHero title="Login">
        <div className="flex justify-center text-white">
          <ButtonCard>
            Login
          </ButtonCard>
        </div>
    </LayoutHero>
  )
}
