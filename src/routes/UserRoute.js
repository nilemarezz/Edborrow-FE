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
import Profile from '../containers/Profile'
import Home from '../containers/Home'
import styled from 'styled-components'
import Header from '../components/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import MyBorrow from '../components/Item/MyBorrowTable'

const Background = styled.div`
position: absolute; 
 width: 100%; 
 height: 100%; 
 background-color: #3f50b5 ;
 overflow: hidden;
 
`
const StyledPaper = styled(Paper)`
margin: 25px;
border-radius : 20px;
 height: 95%;  overflow: scroll;
 ${props => props.mobile ? null : `
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
} 
`}
`
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
    <>

      <CssBaseline />
      <Background >
        <StyledPaper mobile={window.innerWidth < 600 ? true : false}>
          <Header />
          <Router>
            {/* <Navbar /> */}
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
                  <PrivateRoute path={route.user.profile} exact strict>
                    <Profile />
                  </PrivateRoute>
                  <PrivateRoute path={route.user.home} exact strict>
                    <Home />
                  </PrivateRoute>
                  <PrivateRoute path={route.user.myBorrow} exact strict>
                    <MyBorrow />
                  </PrivateRoute>
                </>
                :
                <>
                  <Route path={route.user.home} exact strict component={Home} />
                  <Route path={route.user.items} exact strict component={Item} />
                  <Route path={route.user.cart} component={Cart} exact strict />
                  <Route path={route.user.applicationList} component={ApplicationList} exact strict />
                  <Route path={route.user.profile} component={Profile} exact strict />
                  <Route path={route.user.myBorrow} component={MyBorrow} exact strict />

                </>
              }
            </Switch>

          </Router>
        </StyledPaper>
      </Background>
    </>

  );
};




const mapStateToProps = (state) => {
  return { user: state.User };
};

export default connect(mapStateToProps, null)(UserRoute);
