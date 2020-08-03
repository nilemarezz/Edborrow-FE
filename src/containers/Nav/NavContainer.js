import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import MockNavBar from './MockNavBar'
import { route } from '../../systemdata/route'

const NavbarContiner = (props) => {
  if (
    props.location.pathname === route.auth.login ||
    props.location.pathname === route.auth.register
  ) {
    return (
      <MockNavBar />
    );
  } else {
    return <Navbar />;
  }
};

export default withRouter(NavbarContiner);
