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
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import Header from '../components/Header'
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
const DetailRoute = () => {
  return (
    <>
      <CssBaseline />
      <Background >
        <StyledPaper mobile={window.innerWidth < 600 ? true : false}>
          <Header />
          <Router>
            <Switch>
              <Route path={`${route.detail.itemDetail}/:id`} exact strict component={ItemDetail} />
              <Route path={`${route.detail.applicationDetail}/:id`} exact strict component={ApplicationDetail} />
            </Switch>
          </Router>
        </StyledPaper>
      </Background>
    </>
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
