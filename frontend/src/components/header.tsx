import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-around items-center p-5">
        <NavLink to="/">Home</NavLink>
        <p className="text-5xl uppercase font-bold ">nhl dream team</p>
        <NavLink to="/search">Search Players</NavLink>
      </nav>
    </header>
  );
};

export default Header;
