import React from 'react'
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router-dom'
import { route } from '../../systemdata/route'

const ErrorPage = (props) => {
  const Redirect = () => {
    return props.history.push(route.home)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontWeight: 500, fontSize: 200, lineHeight: 0 }}>404</h1>
      <h1 style={{ fontWeight: 500, fontSize: 50, lineHeight: 0 }}>Page Not Found</h1>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        onClick={Redirect}
      >HOME
      </Button>
    </div>
  )
}

export default withRouter(ErrorPage)