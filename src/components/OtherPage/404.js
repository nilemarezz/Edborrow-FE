import React from 'react'
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router-dom'
import { route } from '../../systemdata/route'
import styled from 'styled-components'

const Content = styled.h1`
  font-weight : 500px;
  font-size : ${props => props.fontSize}px;
  line-height: 0;
`
const Container = styled.div`
  display : flex;
  flex-direction: column ;
  justify-content: center;
  align-items : center;
`

const ErrorPage = (props) => {
  const Redirect = () => {
    return props.history.push(route.home)
  }
  return (
    <Container>
      <Content fontSize={200}>404</Content>
      <Content fontSize={50}>Page Not Found</Content>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        onClick={Redirect}
      >HOME
      </Button>
    </Container>
  )
}

export default withRouter(ErrorPage)