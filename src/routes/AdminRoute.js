import React from "react";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from '../containers/Dashboard.admin'
import { connect } from "react-redux";
import { route } from '../systemdata/route'
import AdminNav from '../containers/Nav/AdminNav'
import ApplicationList from '../containers/ApplicationList.admin'
import Items from '../containers/Item.admin'

const Admin = (props) => {
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
        if (props.user.admin === false) {
          return (
            <Redirect
              to={{
                pathname: route.user.items,
              }}
            />
          );
        }
        return children;
      }
    };
    return <Route {...rest} render={({ location }) => render()} />;
  }
  return (
    <Router>
      <Switch>
        <AdminNav>
          {process.env.REACT_APP_ENV === "production" ?
            <>
              <PrivateAdminRoute path={route.admin.applicationList} exact strict >
                <ApplicationList />
              </PrivateAdminRoute >
              <PrivateAdminRoute path={route.admin.dashboard} exact strict >
                <Dashboard />
              </PrivateAdminRoute >
              <PrivateAdminRoute path={route.admin.items} exact strict >
                <Items />
              </PrivateAdminRoute >
            </>
            :
            <>
              <Route path={route.admin.dashboard} component={Dashboard} exact strict />
              <Route path={route.admin.applicationList} component={ApplicationList} exact strict />
              <Route path={route.admin.items} component={Items} exact strict />
            </>
          }
        </AdminNav>
      </Switch>
    </Router>

  );
};

const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, null)(Admin);
