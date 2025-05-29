import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="brand">
          <h1 className="site-title">WINE FOR FRIENDS</h1>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/wines" className="menu-link" onClick={closeMenu}>
                Viner
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/producers"
                className="menu-link"
                onClick={closeMenu}
              >
                Producenter
              </NavLink>
            </li>
            <li>
              <NavLink to="/import" className="menu-link" onClick={closeMenu}>
                Privatimport
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu-link" onClick={closeMenu}>
                Om oss
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="menu-link" onClick={closeMenu}>
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="menu-link" onClick={closeMenu}>
                Blogg
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
