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
import ItemDetail from '../containers/ItemDetail.admin'
import AddItem from '../containers/AddItem.admin'

const AdminDetail = (props) => {
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
        if (props.user.staff === false && props.user.department === false) {
          return (
            <Redirect
              to={{
                pathname: route.user.items,
              }}
            />
          );
        }
        else if (props.user.admin === true) {
          return (
            <Redirect
              to={{
                pathname: route.systemadmin.addItem,
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
              <PrivateAdminRoute path={`${route.adminDetail.itemDetailAdmin}/:id`} exact strict >
                <ItemDetail />
              </PrivateAdminRoute >
            </>
            :
            <>
              <Route path={`${route.adminDetail.itemDetailAdmin}/:id`} component={ItemDetail} exact strict />
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

export default connect(mapStateToProps, null)(AdminDetail);
