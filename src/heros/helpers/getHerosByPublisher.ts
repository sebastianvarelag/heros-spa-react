import { heros } from "../data/heros"

export const getHerosByPublisher = (publisher: string) =>{
  return heros.filter(hero => hero.publisher === publisher);
}