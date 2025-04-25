import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="brand">
        <h1>WINE FOR FRIENDS</h1>
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to="/wines" className="menu-link">
              Viner
            </NavLink>
          </li>
          <li>
            <NavLink to="/producers" className="menu-link">
              Producenter
            </NavLink>
          </li>
          <li>
            <NavLink to="/import" className="menu-link">
              Privatimport
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="menu-link">
              Om oss
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="menu-link">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="menu-link">
              Blogg
            </NavLink>
          </li>
        </ul>
      </nav>

      <NavLink to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
    </header>
  );
};

export default Header;
