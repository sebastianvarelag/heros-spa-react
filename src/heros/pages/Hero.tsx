import { HeroCard } from "../components/HeroCard"
import { LayoutHero } from "../layout/LayoutHero"

export const Hero = () => {
  return (
    <>
      <LayoutHero title="Batman">
        <div className="flex justify-center w-screen">
            {/* <HeroCard/> */}
        </div>
      </LayoutHero>
    </>
  )
}
