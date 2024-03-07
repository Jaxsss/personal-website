import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/podpis.svg" alt="" />

          <ul>
            <li>
              <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">Úvod</Link>
            </li>

            <li>
              <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Znalosti</Link>
            </li>

            <li>
              <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">Pracovní zkušenosti</Link>
            </li>

            <li>
              <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Kontakt</Link>
            </li>

            {/*<button className="contact-btn" onClick={() => {}}>*/}
            {/*  CV*/}
            {/*</button>*/}
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
