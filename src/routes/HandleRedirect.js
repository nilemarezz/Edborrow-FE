import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { route } from '../systemdata/route'
import { connect } from 'react-redux'

const HandleRedirect = (props) => {
  if (props.user.staff || props.user.department) {
    return <Redirect to={route.admin.dashboard} />
  } else if (props.user.admin === true) {
    return <Redirect to={route.systemadmin.addItem} />
  } else {
    return <Redirect to={route.user.home} />
  }
}

const mapStateToProps = (state) => {
  return { user: state.User }
}

export default connect(mapStateToProps, null)(withRouter(HandleRedirect))
