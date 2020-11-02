import React from 'react'
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { LoginThunk } from "../thunk/User/Login";
import { AuthThunk } from '../thunk/User/Auth'
import WithLoading from "../utilities/WithLoading";
import { snackBarCheckLogin } from "../utilities/userSnackbar";
import socketIOClient from "socket.io-client";
import config from '../env'
import { Auth } from '../services/UserService/Authentication'
const Container = styled.div`
  margin : 0px;
  height : 100%;
  background-color : #3f50b5;
  width : 100%;
  overflow: hidden;
  position: absolute;
  display : flex;
  justify-content : center;
  align-items : center;
`
const LogoContainer = styled.div`
display : flex;
flex-direction : row;
align-items : center;
margin-bottom : -30px;
margin-top : 20px;
`
class Login extends React.Component {
  state = { username: "", password: "", loading: false, openForm: false };

  onHandleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onHandlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onSumitForm = async (e) => {
    e.preventDefault();

    const data = await this.props.LoginThunk({
      username: this.state.username,
      password: this.state.password,
    });
    if (data === false) {
      this.props.enqueueSnackbar('Login Fail', {
        variant: 'error',
      });
    } else {
      const snackLogin = snackBarCheckLogin(this.props.user);
      this.props.enqueueSnackbar(snackLogin.text, {
        variant: snackLogin.type,
      });
      this.props.history.push(snackLogin.redirect);

    }
  };

  redirectPage = () => {
    const snackLogin = snackBarCheckLogin(this.props.user);
    this.props.history.push(snackLogin.redirect);
  };

  getAuth = async () => {
    if (window.location.href.substring(28, 38).length === 10) {
      const data = await this.props.AuthThunk(window.location.href.substring(28, 38))
      if (data) {
        await this.props.history.push('/user/home')
      } else {
        return
      }
    }
  }
  componentDidMount() {
    this.redirectPage();
    const socket = socketIOClient(config.socket);
    socket.on("FromAPI", data => {
      console.log(data)
    });

    // window.location.href.substring(28,38)
    this.getAuth()
  }
  render() {
    return (
      <>
        <WithLoading loading={this.props.user.loading} />
        <CssBaseline />
        <Container >
          <Paper style={{ width: '90%' }}>

            <Grid container spacing={1} style={{ margin: '0px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs={0} sm={6} display={{ xs: 'none' }} >
                <Box display={{ xs: 'none', sm: 'none', md: 'block', }}>
                  <LogoContainer >
                    <img src={process.env.PUBLIC_URL + '/inventory.png'} alt="loading" width={40} height={40} />
                    <Typography variant="h5" component="h5" gutterBottom style={{ marginLeft: 10 }}>
                      Edborrow
              </Typography>
                  </LogoContainer>
                  <img src={process.env.PUBLIC_URL + '/cover.svg'} alt="cover" width={450} height={600} style={{ marginLeft: 20 }} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '20%' }}>
                    <img src={process.env.PUBLIC_URL + '/profile.svg'} alt="cover" width={100} height={100} style={{ marginLeft: 20 }} />
                    <Typography variant="h4" component="h4" gutterBottom style={{ marginLeft: 20 }}>
                      Welcome {this.state.openForm ? "Administrator" : null}!
              </Typography>
                  </div>
                  {this.state.openForm ? <form noValidate
                    autoComplete="off"
                    onSubmit={(e) => this.onSumitForm(e)}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Email"
                      fullWidth
                      required
                      variant="outlined"
                      style={{ width: '85%', marginTop: 20 }}
                      value={this.state.username}
                      onChange={(e) => this.onHandleUsername(e)}
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
                      label="Password"
                      type="password"
                      fullWidth
                      required
                      variant="outlined"
                      value={this.state.password}
                      onChange={(e) => this.onHandlePassword(e)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      style={{ width: '85%', marginTop: 20 }}
                    />

                    <Button variant="contained" color="primary" style={{ marginTop: 30, width: '85%' }} type="submit">
                      Login
                </Button>

                  </form> : null}
                  <a href="https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=WNS8RCIb&redirect_uri=http://localhost:3001&state=edborrow" style={{ textDecoration: 'none' }}>

                    <Button variant="contained" color="secondary" style={{ marginTop: 30, width: '85%' }} type="submit">Login As User</Button>
                  </a>
                  {this.state.openForm ? null : <Button variant="contained" color="primary" style={{ marginTop: 30, width: '85%' }} type="submit" onClick={() => this.setState({ openForm: true })}>Login As Admin</Button>}
                </div>
                {/* <p style={{ marginTop: 20 }}>Don't have an account?
                <Link to="/register" style={this.props.darkmode ? { color: "white", marginTop: 20 } : { marginTop: 20 }}>
                    &nbsp;Sign Up
                </Link>
                </p> */}



              </Grid>
            </Grid>
          </Paper>
        </Container>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return { user: state.User, darkmode: state.WEB_CONFIG.darkmode };
};

export default connect(mapStateToProps, { LoginThunk, AuthThunk })(withSnackbar(Login));
