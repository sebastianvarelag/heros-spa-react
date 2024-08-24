import { NavLink } from "react-router-dom";

type NavItemArgs = {
  title: string;
}

export const NavItem = (props: NavItemArgs) => {

  const { title } = props;
  
  return (
    <>
      <li className="flex h-full mx-2">
        <NavLink to={title} className={(args) => `self-center px-4 text-white ${args.isActive ? "isActive" : ""}`}>
          <span>{title}
          </span>
        </NavLink>
      </li>
    </>
  )
}
