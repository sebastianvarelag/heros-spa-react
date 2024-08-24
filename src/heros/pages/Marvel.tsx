import { HerosList } from "../components/HerosList"
import { LayoutHero } from "../layout/LayoutHero"

export const Marvel = () => {
  return (
    <>
      <LayoutHero title="Marvel">
        <HerosList publisher="Marvel Comics"/>
      </LayoutHero>
    </>
  )
}
