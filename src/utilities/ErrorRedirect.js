import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'

const RedirectError = () => {
    return <Redirect to='/error' />
}


export default withRouter(RedirectError)