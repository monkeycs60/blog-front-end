import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center font-bold bg-green-400 my-2 ">
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
