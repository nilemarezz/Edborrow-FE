import React from "react";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import { route } from '../systemdata/route'
import ItemDetail from '../containers/ItemDetail'
import ApplicationDetail from '../containers/ApplicationDetail'
import Nav from '../containers/Nav/Navbar'
import ItemDetailAdmin from '../containers/ItemDetail.admin'
const DetailRoute = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={`${route.detail.itemDetail}/:id`} exact strict component={ItemDetail} />
        <Route path={`${route.detail.applicationDetail}/:id`} exact strict component={ApplicationDetail} />
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

export default connect(mapStateToProps, null)(DetailRoute);
