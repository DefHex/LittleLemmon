import "../App.css";
import Navbar from "./NavbarMobile";
import React, { useState, useEffect } from "react";
function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize(); // Check screen size on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Nav">
      <nav>
        {isMobile ? (
          <div>
            <Navbar />
          </div>
        ) : (
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Menu">Menu</a>
            </li>
            <li>
              <a href="#Reservations">Reservations</a>
            </li>
            <li>
              <a href="#Order online">Order online</a>
            </li>
            <li>
              <a href="#Login">Login</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Nav;
