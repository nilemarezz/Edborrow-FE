import React from "react";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from '../containers/Dashboard'
import { connect } from "react-redux";
import { route } from '../systemdata/route'

const Admin = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={route.admin.dashboard} component={Dashboard} exact strict />
      </Switch>
    </Router>

  );
};

function PrivateAdminRoute({ admin, children, ...rest }) {
  const render = () => {
    if (localStorage.getItem("userToken") === null) {
      return (
        <Redirect
          to={{
            pathname: route.auth.login,
          }}
        />
      );
    } else {
      if (admin === false) {
        return (
          <Redirect
            to={{
              pathname: route.user.home,
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

export default connect(mapStateToProps, null)(Admin);
