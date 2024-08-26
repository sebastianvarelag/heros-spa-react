import { Link, NavLink } from "react-router-dom"
import { NavItem } from "./NavItem"

export const Navbar = () => {
  
  const navList: string[] = ["Marvel", "DC"]
  
  return (
    <>
      <nav className="w-full h-[50px] bg-[#24252a] flex justify-between px-2">
        <ul className="flex flex-row items-center">
          {
            navList.map((title, index) => (
              <NavItem key={index} title={title}/>
            ))
          }
        </ul>
        <ul className="flex flex-row items-center">
          <li className="px-4 mr-6 text-white rounded-lg bg-slate-600">Sebita Varela</li>
          <li className="flex h-full mx-2">
            <NavLink to={'search'} className="self-center px-4 text-white cursor-pointer">
              <span>Search</span>
            </NavLink>
            <Link to={'/auth/login'} className="self-center px-4 text-white cursor-pointer">
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}