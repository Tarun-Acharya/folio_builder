import React, { Component } from "react";
import "./NavBar.css";
import NavItem from "./NavItem";
class NavBar extends Component {
  state = {
    links: ["Home", "About Me", "Resume", "Projects", "Contact"],
  };
  render() {
    return (
      <div className="navbar">
        <div className="Name">
          <h1 className="Title">Virat Kohli</h1>
        </div>
        <div className="Navlist">
          {this.state.links.map((link) => (
            <NavItem name={link} />
          ))}
        </div>
      </div>
    );
  }
}

export default NavBar;
