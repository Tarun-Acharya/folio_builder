import React, { Component } from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";
class NavItem extends Component {
  state = {};
  render() {
    return (
      <Link className="text" to={"/" + this.props.name}>
        {this.props.name}
      </Link>
    );
  }
}

export default NavItem;
