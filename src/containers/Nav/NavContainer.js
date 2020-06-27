import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
const NavbarContiner = (props) => {
  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register"
  ) {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">EdBorrow</Typography>
        </Toolbar>
      </AppBar>
    );
  } else {
    return <Navbar />;
  }
};

export default withRouter(NavbarContiner);
