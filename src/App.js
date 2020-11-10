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
import SystemAdminRoute from './routes/AdminRoute.systemadmin'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import config from './env'

const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};
const notistackRef = React.createRef();

const App = (props) => {
  const darkTheme = createMuiTheme({
    palette: {
      type: props.webConfig.darkmode ? "dark" : "light",

    },


  })
  const checkUser = async () => {
    if (localStorage.getItem('userItem') !== "undefined" || localStorage.getItem('userItem') !== null) {
      const user = await props.UserDetailThunk({ token: getToken(), type: "login" });
      if (user === false) {
        return <Redirect to="/error" />
      }
    } else {
      localStorage.removeItem('userItem')
    }
  }
  useEffect(() => {
    checkUser()
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => <Button onClick={onClickDismiss(key)}>Dismiss</Button>}
        >
          <WithLoading loading={props.user.loading} />
          <Router>
            {/* <MockNav /> */}
            < Switch >
              <Route path="/" component={HandleRedirect} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/user/:section" component={UserRoute} exact />
              <Route path="/admin/:section" component={AdminRoute} exact />
              <Route path="/detail/:section/:id" component={DetailRoute} exact />
              <Route path="/admin/detail/:section/:id" component={AdminDetail} exact />
              <Route path="/systemadmin/:section" component={SystemAdminRoute} exact />
              <Route path="/approve/type/:type" component={ApproveNoti} exact />
              <Route component={ErrorPage} />
            </ Switch>
          </Router>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};


const mapStateToProps = (state) => {
  return { user: state.User, webConfig: state.WEB_CONFIG };
};

export default connect(mapStateToProps, { UserDetailThunk })(App);