import React from 'react'
import styled from 'styled-components'
import Typography from "@material-ui/core/Typography";
const Container = styled.div`
    margin-left : 7%;
    line-height : 1.5;
    border-left : 4px solid #3f51b5;
    margin-top : 1%;

`
class TitleComponent extends React.Component {
  render() {
    return (
      <Container>
        <Typography variant="h4" gutterBottom style={{ paddingLeft: 20 }}>
          {this.props.title}
        </Typography>

      </Container>
    )
  }
}

export default TitleComponent