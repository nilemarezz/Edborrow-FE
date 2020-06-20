import React from "react";
import { SnackbarProvider } from "notistack";
import {
  Redirect,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Login from "./containers/Login";
import Register from './containers/Register'
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};
const notistackRef = React.createRef();
function App() {
  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => <Button onClick={onClickDismiss(key)}>Dismiss</Button>}
    >
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact strict />
          <Route path="/register" component={Register} exact strict />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
