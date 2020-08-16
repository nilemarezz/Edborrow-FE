import React, { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { connect } from "react-redux";
import { UserDetailThunk } from "./thunk/User/UserDetail";
import { checkToken, getToken } from "./utilities/check/checkToken";
import MockNav from './containers/Nav/MockNavBar'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute'
import DetailRoute from './routes/DetailRoute'
import WithLoading from './utilities/WithLoading'
import ErrorPage from './components/OtherPage/404'
import ApproveNoti from './components/OtherPage/ApproveNoti'
import HandleRedirect from './routes/HandleRedirect'
import ItemDetail from './containers/ItemDetail.admin'
import AdminDetail from './routes/DetailRoute.admin'

const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};
const notistackRef = React.createRef();

const App = (props) => {
  // useEffect(() => {
  //   if (checkToken())
  //     props.UserDetailThunk({ token: getToken(), type: "login" });
  // }, []);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SnackbarProvider
        ref={notistackRef}
        action={(key) => <Button onClick={onClickDismiss(key)}>Dismiss</Button>}
      >
        <WithLoading loading={props.user.loading} />
        <Router>
          <MockNav />
          <Switch>
            <Route path="/" component={HandleRedirect} exact strict />
            <Route path="/login" component={Login} exact strict />
            <Route path="/register" component={Register} exact strict />
            <Route path="/user/:section" component={UserRoute} exact strict />
            <Route path="/admin/:section" component={AdminRoute} exact strict />
            <Route path="/detail/:section/:id" component={DetailRoute} exact strict />
            <Route path="/admin/detail/:section/:id" component={AdminDetail} exact strict />
            <Route path="/approve/type/:type" component={ApproveNoti} exact strict />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </MuiPickersUtilsProvider>
  );
};


const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, { UserDetailThunk })(App);
