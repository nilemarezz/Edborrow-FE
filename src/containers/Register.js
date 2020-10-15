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
import WithLoading from "../utilities/WithLoading";
import PhoneIcon from '@material-ui/icons/Phone';
import AdvisorInput from '../components/Cart/AdvisorInput'
import { RegisterThunk } from "../thunk/User/Register";
import Sign from '../components/sign/Sign'
import socketIOClient from "socket.io-client";
import config from '../env'
const Container = styled.div`
  margin : 0px;
  height : 100%;
  background-color : #3f50b5;
  position : absolute;
  width : 100%;
  overflow: hidden;
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
class Register extends React.Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    register: false,
    advisor: null
  };
  componentDidMount() {
    const socket = socketIOClient(config.socket);
    socket.on("FromAPI", data => {
      console.log(data)
    });
  }
  submitForm = (e) => {
    e.preventDefault();
    const dataUser = {
      email: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      advisor: this.state.advisor
    };
    this.props.RegisterThunk(dataUser);

    this.setState({ register: true });
  };
  setAdvisor = (id) => {
    this.setState({ advisor: id })
  }
  render() {
    return (
      <>
        <WithLoading loading={this.props.user.loading} />
        <CssBaseline />
        <Container >
          <Paper style={{ width: '90%' }}>

            <Grid container spacing={1} style={{ margin: '0px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs={0} sm={6} display={{ xs: 'none' }}>
                <Box display={{ xs: 'none', sm: 'none', md: 'block', }}>
                  <LogoContainer >
                    <img src={process.env.PUBLIC_URL + '/inventory.png'} alt="loading" width={40} height={40} />
                    <Typography variant="h5" component="h5" gutterBottom style={{ marginLeft: 10 }}>
                      Edborrow
              </Typography>
                  </LogoContainer>
                  <img src={process.env.PUBLIC_URL + '/cover2.svg'} alt="cover" width={450} height={600} style={{ marginLeft: 20 }} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} >
                {this.state.register ?


                  <Complete />
                  :
                  <>
                    <div>
                      <form noValidate
                        autoComplete="off"
                        onSubmit={(e) => this.submitForm(e)}>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Email"
                          fullWidth
                          required
                          variant="outlined"
                          style={{ width: '85%', marginTop: 20 }}
                          value={this.state.username}
                          onChange={(e) =>
                            this.setState({ username: e.target.value })
                          }
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
                          label="First Name"
                          fullWidth
                          required
                          variant="outlined"
                          value={this.state.firstname}
                          onChange={(e) =>
                            this.setState({ firstname: e.target.value })
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                          style={{ width: '85%', marginTop: 20 }}
                        />
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Last Name"
                          fullWidth
                          required
                          variant="outlined"
                          value={this.state.lastname}
                          onChange={(e) =>
                            this.setState({ lastname: e.target.value })
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                          style={{ width: '85%', marginTop: 20 }}
                        />
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Phone Number"
                          fullWidth
                          required
                          variant="outlined"
                          value={this.state.phonenumber}
                          onChange={(e) =>
                            this.setState({ phonenumber: e.target.value })
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PhoneIcon />
                              </InputAdornment>
                            ),
                          }}
                          style={{ width: '85%', marginTop: 20 }}
                        />
                        <AdvisorInput setAdvisor={this.setAdvisor} getId={true} />

                        <Button variant="contained" color="primary" style={{ marginTop: 30, width: '85%' }} type="submit">
                          Sign Up
                </Button>
                      </form>

                    </div>
                    <p style={{ marginTop: 20 }}>Have an account?
                <Link to="/login" style={this.props.darkmode ? { color: "white", marginTop: 20 } : { marginTop: 20 }}>
                        &nbsp;Sign In
                </Link>
                    </p>
                  </>
                }


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

export default connect(mapStateToProps, { RegisterThunk })(
  withSnackbar(Register)
);

const Complete = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '20%' }}>
      <Sign type="success" />
      <Typography variant="h4" component="h4" gutterBottom >
        Sign Up Success
              </Typography>
      <Typography variant="h6" component="h6" gutterBottom >
        Please Check your Email for the password
              </Typography>
      <Link to="/login" >Sign In</Link>
    </div>
  )
}
