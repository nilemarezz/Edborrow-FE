import React, { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,withRouter
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { connect } from "react-redux";
import { UserDetailThunk } from "./thunk/User/UserDetail";
import { checkToken, getToken } from "./utilities/checkToken";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import WithLoading from "./utilities/WithLoading";
import Item from "./containers/Item";
import NavbarContiner from './containers/Nav/NavContainer'
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};
const notistackRef = React.createRef();
const App = (props) => {
  
  useEffect(() => {
    if (checkToken())
      props.UserDetailThunk({ token: getToken(), type: "login" });
  }, []);

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => <Button onClick={onClickDismiss(key)}>Dismiss</Button>}
    >
      <WithLoading loading={props.user.loading} />
      <Router>
        <NavbarContiner/>
        <Switch>
        <PrivateRoute path="/" exact strict>
          <Item />
        </PrivateRoute>
        <Route path="/login" component={Login} exact strict />
        <Route path="/register" component={Register} exact strict />
        <PrivateRoute>
          <Route path="/" component={Home} exact strict />
        </PrivateRoute>
        <PrivateAdminRoute admin={props.user.admin}>
          <Route path="/dashboard" component={Dashboard} exact strict />
        </PrivateAdminRoute>
        </Switch>
      </Router>
    </SnackbarProvider>
  );
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("userToken") !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

function PrivateAdminRoute({ admin, children, ...rest }) {
  const render = () => {
    if (localStorage.getItem("userToken") === null) {
      return (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    } else {
      if (admin === false) {
        return (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }
      return children;
    }
  };
  return <Route {...rest} render={({ location }) => render()} />;
}

const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, { UserDetailThunk })(App);
