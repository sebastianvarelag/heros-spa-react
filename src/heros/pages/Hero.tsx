import { useNavigate, useParams } from "react-router-dom"
import { LayoutHero } from "../layout/LayoutHero"
import { getHeroById } from "../helpers/getHeroById";
import { superhero } from "../../auth/types/types";
import { ButtonCard } from "../../ui/components/ButtonCard";

export const Hero = () => {
  
  const heroId = useParams<{id: string}>();
  
  const hero: superhero | undefined = getHeroById(heroId.id);

  const back = useNavigate();

  const onNavigateBack = () =>{
    back(-1);
  }

  return (
    <>
      <LayoutHero title={hero?.superhero}>
        <div className="flex justify-center">
            <div className="container grid-cols-2 px-10 py-5 lg:grid">
              <img className="m-auto border-4 border-transparent sm:w-9/12 rounded-3xl" src={`/assets/heroes/${hero?.id}.jpg`} alt={hero?.superhero} />
              <div className="flex flex-col flex-wrap justify-between m-8">
                <div className="section-info">
                  <h2>Alter Ego: </h2>
                  <span className="font-bold">{hero?.alter_ego}</span>
                  <hr className="my-4 border-black"/>
                  <h2>Publisher: </h2>
                  <span className="font-bold">{hero?.publisher}</span>
                  <hr className="my-4 border-black"/>
                  <h2>First Appearance</h2>
                  <span className="font-bold">{hero?.first_appearance}</span>
                  <hr className="my-4 border-black"/>
                  <h2>Characters: </h2>
                  <span className="font-bold">{hero?.characters}</span>
                  <hr className="my-4 border-black"/>
                </div>
                <div className="section-button-back">
                  <span onClick={onNavigateBack}>  
                    <ButtonCard>
                      Back
                    </ButtonCard>
                  </span>
                </div>
              </div>
            </div>
        </div>
      </LayoutHero>
    </>
  )
}
