import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="my-2 flex items-center justify-between bg-green-400 font-bold ">
      <NavLink className="text-3xl" to="/">
        Mon blog
      </NavLink>
      <nav className="flex gap-3 font-thin">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
