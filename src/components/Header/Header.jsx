import React, { useRef } from "react";
import logo from "../../assets/main-logo.png";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow2.svg";
import sidebarIcon from "../../assets/sidebar.svg";
import crossIcon from "../../assets/cross.png";
import "./Header.scss";

const Header = () => {
  const navRef = useRef();

  function toggleMenu() {
    let closeMenu = document.querySelector(".close-menu");

    let showMenu = document.querySelector(".show-menu");

    let navbar = document.querySelector("nav ul li");

    // closeMenu.classList.toggle("active");
    showMenu.classList.toggle("active");
    navbar.classList.toggle("active-nav");

    console.log(closeMenu);
    console.log(showMenu);
    console.log(navbar);
  }

  return (
    <header>
      <img
        onClick={toggleMenu}
        className="show-menu active"
        src={sidebarIcon}
      />
      <div className="logo">
        <img className="logo-img" src={logo} alt="logo of nawee" />
      </div>
      <nav>
        <ul>
          <li>
            <img onClick={toggleMenu} className="close-menu" src={crossIcon} />

            <Link className="nav-links home-link" to="/">
              Home
            </Link>
            <Link className="nav-links" to="/help">
              <span>
                Help <img style={{ marginLeft: "5px" }} src={arrow} />
              </span>
            </Link>
            <Link className="nav-links" to="/contact">
              Contact Us
            </Link>
            <button className="light-button nav-button">Download</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
