import React from "react";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import { route } from '../systemdata/route'
import AdminNav from '../containers/Nav/SystemAdminNav'
import AddItem from '../containers/AddItem.systemadmin'
import AddDepartment from '../containers/AddDepartment.systemadmin'
const SystemAdminRoute = (props) => {
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
        if (props.user.staff === false && props.user.department === false && props.user.admin === false) {
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
              <PrivateAdminRoute path={`${route.systemadmin.addItem}`} exact strict >
                <AddItem />
              </PrivateAdminRoute >
              <PrivateAdminRoute path={`${route.systemadmin.addDepartment}`} exact strict >
                <AddDepartment />
              </PrivateAdminRoute >
            </>
            :
            <>
              <Route path={`${route.systemadmin.addItem}`} component={AddItem} exact strict />
              <Route path={`${route.systemadmin.addDepartment}`} component={AddDepartment} exact strict />
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

export default connect(mapStateToProps, null)(SystemAdminRoute);
