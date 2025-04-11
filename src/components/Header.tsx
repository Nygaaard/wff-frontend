import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>WINE FOR FRIENDS</h1>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
