import React, { Component } from "react";
import "./NavItem.css";
class NavItem extends Component {
  state = {};
  render() {
    return <p className="text">{this.props.name}</p>;
  }
}

export default NavItem;
