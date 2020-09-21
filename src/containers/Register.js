import React from "react";
import Grow from "@material-ui/core/Grow";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styled from "styled-components";
import { connect } from "react-redux";
import { RegisterThunk } from "../thunk/User/Register";
import WithLoading from "../utilities/WithLoading";
import { snackBarRegister } from "../utilities/userSnackbar";
import { withSnackbar } from "notistack";
import AdvisorInput from '../components/Cart/AdvisorInput'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const Paper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: "100%";
  margin-top: 20px;
`;

class Register extends React.Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    register: false,
    advisor: null
  };
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
    if (this.state.register) {
      return (
        <Grow in={true} {...(true ? { timeout: 1500 } : {})}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CheckCircleOutlineIcon style={{ fontSize: 200, color: 'lightgreen' }} />
            <Typography variant="h3" component="h2">Register Success</Typography>
            <br></br>
            <Typography variant="h6" component="h2">Please check your Email</Typography>
            <Link to="/login" variant="body2"> Login </Link>
          </div>
        </Grow>
      )


    } else {
      return (
        <>
          <WithLoading loading={this.props.user.loading} />
          <Grow in={true} {...(true ? { timeout: 700 } : {})}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Paper>

                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
              </Typography>
                <Form
                  noValidate
                  autoComplete="off"
                  onSubmit={(e) => this.submitForm(e)}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="First Name"
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Last Name"
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Phone Number"
                    onChange={(e) =>
                      this.setState({ phonenumber: e.target.value })
                    }
                  />
                  <AdvisorInput setAdvisor={this.setAdvisor} getId={true} />

                  <Grid container>
                    <Grid item xs>
                      <Button type="submit" variant="contained" color="primary">
                        Submit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Link to="/login" variant="body2">
                        {"Have Account ? Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>


              </Paper>
            </Container>
          </Grow>
        </>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, { RegisterThunk })(
  withSnackbar(Register)
);
