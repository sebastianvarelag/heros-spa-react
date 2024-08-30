import { useLocation, useNavigate } from "react-router-dom"
import { LayoutHero } from "../layout/LayoutHero"
import queryString from "query-string";
import { ButtonComponent } from "../../ui/components/ButtonComponent";
import { useForm } from "../../hooks/useForm";
import { getHeroBySearch } from "../helpers/getHeroBySearch";
import { superhero } from "../../auth/types/types";
import { HeroCard } from "../components/HeroCard";

type formQuery = {
  searchText: string | (string | null)[] | null,
}

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search)

  let hero: Array<superhero> = [];
  
  if(typeof q === 'string'){
    if(q !== ""){
      hero = getHeroBySearch(q)
    }
  }  

  const {form, handleChange} = useForm<formQuery>({
    searchText: q,
  })

  const {searchText} = form;

  
  const onSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <LayoutHero title="Search">
        <div className="mx-12 my-4">
          <div className="grid mb-6 md:grid-cols-2 h-[700px]">
            <form onSubmit={onSubmit}>  
              <div className="px-6 md:border-r-2 border-slate-500">
                <h3 className="py-2 text-xl">Searching</h3>
                <hr className="p-2 border-t-2 border-slate-500"/>
                <input type="text" 
                  onChange={handleChange}
                  name="searchText" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here" />
                <ButtonComponent>
                  <button type="submit" className="w-20 my-6">Search</button>
                </ButtonComponent>
              </div>
            </form>
            <div className="px-6">
              <h3 className="py-2 text-xl">Result</h3>
              <hr className="p-2 border-t-2 border-slate-500"/>
              {
                (q === '')
                  ? <div className="w-full p-4 bg-blue-300 border-2 border-blue-400 rounded-lg">
                      <h1>Search a Hero</h1>
                    </div>
                  : (hero.length === 0) && <div className="w-full p-4 bg-red-300 border-2 border-red-400 rounded-lg">
                      <h1>No hero with <strong>{q}</strong></h1>
                  </div>
              }

              <div className="flex flex-grow gap-3">
                {
                  hero.map(hero => <HeroCard key={hero.id} hero={hero}/>)
                }
              </div>

            </div>
          </div>
        </div>
      </LayoutHero>
    </>
  )
}
