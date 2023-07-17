import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <div>
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
