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
import Items from '../containers/Item.systemadmin'
import DepartmentList from '../containers/DepartmentList.systemadmin'
import SystemLogs from '../containers/SystemLogs.systemadmin'
import SystemOS from '../containers/SystemOS.systemadmin'
import UserList from '../containers/UserList.systemadmin'
import CreateUser from '../containers/CreateUser'

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
        if (props.user.admin !== true) {
          if (props.user.department === true || props.user.staff === true) {
            return (
              <Redirect
                to={{
                  pathname: route.admin.dashboard,
                }}
              />
            );
          }
          return (
            <Redirect
              to={{
                pathname: route.user.home,
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

          <>
            <PrivateAdminRoute path={`${route.systemadmin.addItem}`} exact strict >
              <AddItem />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.addDepartment}`} exact strict >
              <AddDepartment />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.items}`} exact strict >
              <Items />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.departmentList}`} exact strict >
              <DepartmentList />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.syetemLog}`} exact strict >
              <SystemLogs />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.systemos}`} exact strict >
              <SystemOS />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.userList}`} exact strict >
              <UserList />
            </PrivateAdminRoute >
            <PrivateAdminRoute path={`${route.systemadmin.createUser}`} exact strict >
              <CreateUser />
            </PrivateAdminRoute >
          </>
        </AdminNav>
      </Switch>
    </Router>

  );
};

const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, null)(SystemAdminRoute);
