import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>WINE FOR FRIENDS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/wines">Viner</NavLink>
          </li>
          <li>
            <NavLink to="/producers">Producenter</NavLink>
          </li>
          <li>
            <NavLink to="/import">Privatimport</NavLink>
          </li>
          <li>
            <NavLink to="/about">Om oss</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
