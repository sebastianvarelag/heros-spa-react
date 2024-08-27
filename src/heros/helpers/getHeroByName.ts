import { heros } from "../data/heros";

export const getHeroByName = (name: string) =>{
  return heros.find(hero => hero.superhero.includes(name));
}