import { useLocation, useNavigate } from "react-router-dom";
import { LayoutHero } from "../layout/LayoutHero"
import queryString from 'query-string';

export const Search = () => {

  const navigator = useNavigate();
  const {search} = useLocation();

  const q = queryString.parse(search);

  console.log(q);
  

  return (
    <>
      <LayoutHero title="Search">
        <div className="mx-12 my-4">
          <div className="grid mb-6 md:grid-cols-2 h-[700px]">
            <div className="px-6 border-r-2 border-slate-500">
              <h3 className="py-2 text-xl">Searching</h3>
              <hr className="p-2 border-t-2 border-slate-500"/>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here" required />
            </div>
            <div className="px-6">
              <h3 className="py-2 text-xl">Result</h3>
              <hr className="p-2 border-t-2 border-slate-500"/>
              <div className="w-full p-4 bg-blue-300 border-2 border-blue-400 rounded-lg">
                <h1>Search a Hero</h1>
              </div>
              <div className="w-full p-4 bg-red-300 border-2 border-red-400 rounded-lg">
                <h1>No hero with</h1>
              </div>
            </div>
          </div>
        </div>
      </LayoutHero>
    </>
  )
}
