import React from 'react'
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
const Container = styled(Paper)`
  display : flex;
  flex-direction : row;
  width:300px;
  height:105px;
  margin:5px;
  border-radius:5px;
`
const Content = styled.div`
  padding:0px 10px;
`
const Title = styled.p`
  border-left : 2px solid ${props => props.color};
  padding-left:10px;
  margin-top:10px;
  
`
const Value = styled.p`
  font-size:40px;
  line-height:0;
  margin-top:30px;
`
const IconContainer = styled.div`
  display:flex;
  height:100%;
  background-color : ${props => props.color};
  width:100px;
  align-items: center;
  justify-content:center;
  border-radius:5px;
`
class DashboardBox extends React.Component {
  render() {
    return (
      <Container>
        <IconContainer className="Icon" color={this.props.color}>
          {this.props.icon}
        </IconContainer>
        <Content className="content">
          <Title color={this.props.color}>{this.props.title}</Title>
          <Value>{this.props.value} <span style={{ fontSize: 15 }}>{this.props.unit}</span></Value>
        </Content>
      </Container>
    )
  }
}

export default DashboardBox