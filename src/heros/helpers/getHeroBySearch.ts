import { heros } from "../data/heros"

export const getHeroBySearch = (q: string) =>{

  const heroes = heros.filter(hero => hero.superhero.toLowerCase().includes(q.toLowerCase()));

  if(heroes.length === 0) return [];

  return heroes
}