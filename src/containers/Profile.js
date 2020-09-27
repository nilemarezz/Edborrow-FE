import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import UserDetail from '../services/UserService/UserDetail'
import { clearToken } from '../utilities/check/checkToken'
import { logoutSuccess } from "../actions/UserAction";
import { withRouter } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [name, setName] = useState("")
  const [advisor, setAdvisor] = useState("")
  const [email, setEmail] = useState("")
  const [userTelNo, setuserTelNo] = useState("")

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

      const res = await fetch(`${process.env.REACT_APP_URL}users/`, {
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
  const getUser = async () => {
    const data = await UserDetail(localStorage.getItem("userToken"))
    if (data.result === "success") {
      setName(data.data.firstName + data.data.lastName)
      setAdvisor(data.data.advisorName)
      setEmail(data.data.email)
      setuserTelNo(data.data.userTelNo)
    } else {
      return
    }


  }

  useEffect(() => {
    getUser()
  }, [])
  console.log(props)
  return (
    <div style={{ margin: '0% 30px' }}>
      <Grid container spacing={3} style={{ padding: 30 }}>
        <Grid item xs={12} sm={6}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <img src={process.env.PUBLIC_URL + '/profile.svg'} alt="cover" width={100} height={100} style={{ marginLeft: 20 }} />
            <Typography variant="h5" component="h5" gutterBottom style={{ marginLeft: 20 }}>
              Profile
              </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              disabled
              fullWidth
              required
              value={name}
              variant="outlined"
              style={{ marginTop: 20 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              fullWidth
              disabled
              value={email}
              required
              variant="outlined"
              style={{ marginTop: 20 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Telephone Number"
              fullWidth
              disabled
              required
              value={userTelNo}
              variant="outlined"
              style={{ marginTop: 20 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Advisor"
              fullWidth
              value={advisor}
              disabled
              required
              variant="outlined"
              style={{ marginTop: 20 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />

          </div>
          <FormControlLabel
            control={
              <Switch
                checked={props.web.darkmode}
                onChange={(e) => props.changeTheme(e)}
                name="checkedB"
                color="secondary"
              />
            }
            label="Dark Mode"
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ borderLeft: '2px solid lightgrey' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <img src={process.env.PUBLIC_URL + '/password.svg'} alt="cover" width={100} height={100} style={{ marginLeft: 20 }} />
            <Typography variant="h5" component="h5" gutterBottom style={{ marginLeft: 20 }}>
              Reset Password
              </Typography>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => submitPass(e)}
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Your Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                style={{ marginTop: 20 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="New Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                style={{ marginTop: 20 }}
                onChange={(e) => setnewPassword(e.target.value)}
                value={newPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Confirm Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                style={{ marginTop: 20 }}
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" color="primary" style={{ marginTop: 30 }} fullWidth type="submit">
                Change Password
                </Button>
            </form>

          </div>

        </Grid>
        <Button variant="contained" color="secondary" style={{ marginTop: 30 }} fullWidth
          onClick={() => {
            props.Logout();
            enqueueSnackbar("Logout Success!", {
              variant: "success",
            });
            props.history.push("/login");
          }}
        >
          Logout
        </Button>
      </Grid>
    </div>
  );
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  Logout: async (item) => {
    clearToken();
    dispatch(logoutSuccess());
  },
  changeTheme: async (e) => {
    dispatch({ type: "CHANGE_THEME", payload: e.target.checked });
  }
});
const mapStateToProps = (state) => {
  return { User: state.User, web: state.WEB_CONFIG };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
