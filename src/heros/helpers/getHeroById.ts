import { heros } from "../data/heros";

export const getHeroById = (id: string | undefined) => {
  return heros.find((hero) => hero.id === id);
};