import React from "react";
import "./NavBar.css";
import NavItem from "./NavItem";

function NavBar() {
  const links = ["Home", "About Me", "Resume", "Work", "Projects", "Contact"];

  return (
    <div className="navbar">
      <div className="Name">
        <h1 className="Title">Virat Kohli</h1>
      </div>
      <div className="Navlist">
        {links.map((link) => (
          <NavItem key={link} name={link} />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
