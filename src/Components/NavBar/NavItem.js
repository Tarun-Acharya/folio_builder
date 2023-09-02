import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <Link className="text" to={"/" + props.name}>
      {props.name}
    </Link>
  );
}

export default NavItem;
