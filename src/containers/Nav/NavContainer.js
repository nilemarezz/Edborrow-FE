import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import MockNavBar from './MockNavBar'
const NavbarContiner = (props) => {
  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register"
  ) {
    return (
      <MockNavBar />
    );
  } else {
    return <Navbar />;
  }
};

export default withRouter(NavbarContiner);
