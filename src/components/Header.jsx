import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <a>
          <img src={logo} alt="logo" className="nav-logo" />
        </a>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
