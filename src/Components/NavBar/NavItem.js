import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem() {
  return (
    <Link className="text" to={"/" + this.props.name}>
      {this.props.name}
    </Link>
  );
}

export default NavItem;
