import { Link, NavLink, useNavigate } from "react-router-dom"
import { NavItem } from "./NavItem"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"

export const Navbar = () => {
  
	const navigate = useNavigate();

  const navList: string[] = ["Marvel", "DC"]
  
  const { state, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout();

    navigate('/auth/login', {
			replace: true,
		});
  }

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
          <li className="px-4 mr-6 text-white rounded-lg bg-slate-600">{state.user?.username}</li>
          <li className="flex h-full mx-2">
            <NavLink to={'search'} className="self-center px-4 text-white cursor-pointer">
              <span>Search</span>
            </NavLink>
            <span className="self-center px-4 text-white cursor-pointer"
              onClick={handleLogout}
            >Logout</span>
          </li>
        </ul>
      </nav>
    </>
  )
}