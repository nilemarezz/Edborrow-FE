import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useSnackbar } from "notistack";
import Grow from "@material-ui/core/Grow";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));
const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const classes = useStyles();
  const submitPass = async (e) => {
    e.preventDefault();
    if (confirmPassword !== newPassword) {
      enqueueSnackbar("Password not match", {
        variant: "error",
      });
    } else {
      const data = {
        password,
        newPassword,
      };

      const res = await fetch("https://edborrow.ga/api/users/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,

        },
        body: JSON.stringify(data)
      });
      const dataRes = await res.json()
      if (dataRes.result !== "false") {
        enqueueSnackbar("Change password Success", {
          variant: "success",
        });
        setPassword("")
        setconfirmPassword("")
        setnewPassword("")
      } else {
        enqueueSnackbar("Password not Correct", {
          variant: "error",
        });
      }
    }
  };
  return (
    <div>

      <Grow in={true}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>

            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={(e) => submitPass(e)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm New Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />

              <div className={classes.wrapper}></div>
              <Grid container>
                <Grid item xs>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Grow>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { User: state.User };
};
export default connect(mapStateToProps, null)(Profile);
