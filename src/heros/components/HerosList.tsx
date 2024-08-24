import { getHerosByPublisher } from "../helpers/getHerosByPublisher";
import { HeroCard } from "./HeroCard";

type props = {
  publisher: string,
}

export const HerosList = (value: props) => {

  const { publisher } = value;

  const heros = getHerosByPublisher(publisher);
  
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {
        heros.map(heroe => (
          <HeroCard key={heroe.id} hero={heroe}/>
        ))
      }
    </div>
    // <div>{JSON.stringify(heros)}</div>
  )
}
