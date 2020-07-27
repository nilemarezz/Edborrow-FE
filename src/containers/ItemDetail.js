import React from 'react'
import Title from '../components/Title'
import Grid from '@material-ui/core/Grid'
import Accordion from '../components/ItemDetail/Accordion'
import styled from 'styled-components'
import { renderStatus } from '../utilities/Table/renderItemTable'
import Button from '@material-ui/core/Button';
import GetItemDetail from '../services/ItemService/GetItemDetail'
import WithLoading from '../utilities/WithLoading'

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
class ItemDetail extends React.Component {
  state = { item: {}, loading: false }

  getDetail = async () => {
    console.log('asdasd')
    this.setState({ loading: true })
    const item = await GetItemDetail(this.props.match.params.id);
    console.log(item)
    this.setState({ item: item })
    this.setState({ loading: false })
  }
  componentDidMount() {
    this.getDetail()
  }

  render() {
    const id = this.props.match.params.id
    return (
      <>
        <WithLoading loading={this.state.loading} />
        <Title title={`Item ID : ${id}`} />
        <Grid container style={{ padding: '0px 30px' }}>
          <Grid item xs={12} sm={5}>
            <Image src="https://equipment-image.s3-ap-southeast-1.amazonaws.com/160351_2.jpg" alt="itemImage" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Container>
              <Container>
                <h1>{this.state.item.itemName} </h1>
                <div style={{ marginLeft: 20 }}>{renderStatus(1)}</div>
              </Container>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Container>
            <Accordion item={this.state.item} />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default ItemDetail