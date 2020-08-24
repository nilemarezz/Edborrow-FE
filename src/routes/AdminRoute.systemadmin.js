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
import AdminNav from '../containers/Nav/SystemAdminNav'
import ApplicationList from '../containers/ApplicationList.admin'
import Items from '../containers/Item.admin'
import ItemDetail from '../containers/ItemDetail.admin'
import AddItem from '../containers/AddItem.systemadmin'

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
            </>
            :
            <>
              <Route path={`${route.systemadmin.addItem}`} component={AddItem} exact strict />
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
