import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand" to="/">
        {props.logo}
      </Link>
      <Link className="navbar-brand float-right" to="/main">
        {props.link1}
      </Link>
      <Link className="navbar-brand float-right" to="/">
        {props.link2}
      </Link>
      <Link className="navbar-brand float-right" to="/">
        {props.link3}
      </Link>
      <Link className="navbar-brand float-right" to="/">
        {props.link4}
      </Link>
    </nav>
  );
}

export default Nav;
