import React from 'react'
import Title from '../components/Title'
import Grid from '@material-ui/core/Grid'
import Accordion from '../components/ItemDetail/Accordion'
import styled from 'styled-components'
import { renderStatus } from '../utilities/Table/renderItemTable'
import Button from '@material-ui/core/Button';

const Image = styled.img`
  max-width:90%;
  max-height:90%;
`
const Container = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content : space-between;
`
const ButtonContainer = styled(Container)`
  justify-content: 'flex-end';
`
class ItemDetail extends React.Component {
  render() {
    const id = this.props.match.params.id
    return (
      <>
        <Title title={`Item ID : ${id}`} />
        <Grid container style={{ padding: '0px 30px' }}>
          <Grid item xs={12} sm={5}>
            <Image src="https://equipment-image.s3-ap-southeast-1.amazonaws.com/160351_2.jpg" alt="itemImage" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Container>
              <Container>
                <h1>Asus Predator </h1>
                <div style={{ marginLeft: 20 }}>{renderStatus(1)}</div>
              </Container>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Container>
            <Accordion />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default ItemDetail