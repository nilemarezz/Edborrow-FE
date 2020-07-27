import React from 'react'
import Title from '../components/Title'
import Grid from '@material-ui/core/Grid'
import Accordion from '../components/ItemDetail/Accordion'
import styled from 'styled-components'
import { renderStatus } from '../utilities/Table/renderItemTable'
import Button from '@material-ui/core/Button'
import GetItemDetail from '../services/ItemService/GetItemDetail'
import WithLoading from '../utilities/WithLoading'
import { connect } from 'react-redux'
import { addItemToCart } from '../actions/ItemAction'
import * as R from 'ramda'
import { withRouter } from 'react-router-dom'
import { route } from '../systemdata/route'
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
    this.setState({ loading: true })
    const item = await GetItemDetail(this.props.match.params.id);
    this.setState({ item: item })
    this.setState({ loading: false })
  }
  componentDidMount() {
    this.getDetail()
  }
  addItem = () => {
    this.props.addItemToCart(this.state.item)
  }
  isItemInCart = () => {
    let item = {
      itemId: this.state.item.itemId,
      itemName: this.state.item.itemName,
      itemImage: this.state.item.itemImage,
      departmentName: this.state.item.departmentName,
    };
    var found = R.contains(item, this.props.cart);
    return found
  }
  redirectToCart = () => {
    this.props.history.push(route.user.cart)
  }
  render() {
    const id = this.props.match.params.id
    return (
      <>
        <WithLoading loading={this.state.loading} />
        <Title title={`Item ID : ${id}`} />
        <Grid container style={{ padding: '0px 30px' }}>
          <Grid item xs={12} sm={5}>
            <Image src={this.state.item.itemImage} alt="itemImage" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Container>
              <Container>
                <h1>{this.state.item.itemName} </h1>
                <div style={{ marginLeft: 20 }}>{renderStatus(1)}</div>
              </Container>
              <Button variant="contained" color="primary" onClick={() => this.isItemInCart() ? this.redirectToCart() : this.addItem()}>
                {this.isItemInCart() ? "Cart" : "Add"}
              </Button>
            </Container>
            <Accordion item={this.state.item} />
          </Grid>
        </Grid>
      </>
    )
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  addItemToCart: async ({ itemId, itemName, itemImage, departmentName }) => {
    let data = {
      itemId,
      itemName,
      itemImage,
      departmentName,
    };
    dispatch(addItemToCart(data));
  },
});

export const mapStateToProps = (state) => {
  return { cart: state.Item.Cart }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemDetail))