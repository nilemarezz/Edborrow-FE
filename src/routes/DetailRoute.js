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

const DetailRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path={route.detail.itemDetail} exact strict component={ItemDetail} />
        <Route path={route.detail.applicationDetail} exact strict component={ItemDetail} />
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
