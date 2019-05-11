import React from "react";
import { Link } from "react-router-dom";
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBNavbar } from "mdbreact";
import "./style.css";

function Nav(props) {
  return (
    <MDBNavbar color="elegant-color" dark expand="md"
      
    >
      <MDBContainer style={{ zIndex: 1, background: "none" }}>
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
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;
