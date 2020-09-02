import React from 'react'
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
const MockNavBar = () => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6">EdBorrow </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MockNavBar