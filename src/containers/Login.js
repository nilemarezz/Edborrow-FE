import React from "react";
import Grow from "@material-ui/core/Grow";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styled from "styled-components";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { snackBarCheckLogin } from "../utilities/userSnackbar";
import { LoginThunk } from "../thunk/User/Login";
import WithLoading from "../utilities/WithLoading";
const Paper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContainer = styled.div`
  margin-top: 100px;
`;

class Login extends React.Component {
  state = { username: "", password: "" };

  onHandleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onHandlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onSumitForm = async (e) => {
    e.preventDefault();

    await this.props.LoginThunk({
      username: this.state.username,
      password: this.state.password,
    });
    this.redirectPage();
  };

  redirectPage = () => {
    const snackLogin = snackBarCheckLogin(this.props.user);
    this.props.enqueueSnackbar(snackLogin.text, {
      variant: snackLogin.type,
    });

    this.props.history.push(snackLogin.redirect);
  };
  componentDidMount() {
    this.redirectPage();
  }
  render() {
    return (
      <StyledContainer>
        <WithLoading loading={this.props.user.loading} />
        <Grow in={true}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper>
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => this.onSumitForm(e)}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  value={this.state.username}
                  onChange={(e) => this.onHandleUsername(e)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={(e) => this.onHandlePassword(e)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  fullWidth
                  variant="contained"
                  disable="true"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
                <div></div>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link to="/register">
                      <p>Don't have an account? Sign Up</p>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </Grow>
      </StyledContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, { LoginThunk })(withSnackbar(Login));
