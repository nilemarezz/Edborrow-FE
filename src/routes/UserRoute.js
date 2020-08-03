import React from "react";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import Item from "../containers/Item";
import Cart from '../containers/Cart'
import ApplicationList from '../containers/ApplicationList'
import { route } from '../systemdata/route'
import ItemDetail from '../containers/ItemDetail'
import Navbar from '../containers/Nav/Navbar'
const UserRoute = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path={route.user.home} exact strict component={Item} />
        <Route path={route.user.cart} component={Cart} exact strict />
        <Route path={route.user.applicationList} component={ApplicationList} exact strict /> */}
        <PrivateRoute path={route.user.home} exact strict>
          <Item />
        </PrivateRoute>
        <PrivateRoute path={route.user.cart} exact strict>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path={route.user.applicationList} exact strict>
          <ApplicationList />
        </PrivateRoute>
      </Switch>
    </Router>

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
                pathname: route.auth.login
              }}
            />
          )
      }
    />
  );
}


const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, null)(UserRoute);
