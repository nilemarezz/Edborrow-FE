import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { route } from '../systemdata/route'
import { connect } from 'react-redux'

const HandleRedirect = (props) => {
  const admin = props.user.admin
  if (admin) {
    return <Redirect to={route.admin.dashboard} />
  } else {
    return <Redirect to={route.user.items} />
  }
}

const mapStateToProps = (state) => {
  return { user: state.User }
}

export default connect(mapStateToProps, null)(withRouter(HandleRedirect))
