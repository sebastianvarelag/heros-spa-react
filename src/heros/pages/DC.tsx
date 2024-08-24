import { HerosList } from "../components/HerosList"
import { LayoutHero } from "../layout/LayoutHero"

export const DC = () => {
  return (
    <LayoutHero title="DC">
      <HerosList publisher="DC Comics"/>
    </LayoutHero>
  )
}
