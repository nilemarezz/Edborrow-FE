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
import Navbar from '../containers/Nav/Navbar'

const UserRoute = (props) => {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          if (localStorage.getItem("userToken") !== null) {
            if (props.user.admin === false) {
              return children
            } else {
              return <Redirect
                to={{
                  pathname: route.systemadmin.items
                }}
              />
            }

          } else {
            return <Redirect
              to={{
                pathname: route.auth.login
              }}
            />
          }
        }

        }
      />
    );
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        {process.env.REACT_APP_ENV === "production" ?
          <>
            <PrivateRoute path={route.user.items} exact strict>
              <Item />
            </PrivateRoute>
            <PrivateRoute path={route.user.cart} exact strict>
              <Cart />
            </PrivateRoute>
            <PrivateRoute path={route.user.applicationList} exact strict>
              <ApplicationList />
            </PrivateRoute>
          </>
          :
          <>
            <Route path={route.user.items} exact strict component={Item} />
            <Route path={route.user.cart} component={Cart} exact strict />
            <Route path={route.user.applicationList} component={ApplicationList} exact strict />
          </>
        }
      </Switch>
    </Router>

  );
};




const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, null)(UserRoute);
