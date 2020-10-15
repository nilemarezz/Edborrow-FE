import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem";
import { connect } from "react-redux";
import AdvanceSearch from "../components/Item/AdvanceSearch";
import styled from "styled-components";
import Title from '../components/NewTitle'
import { route } from '../systemdata/route'
import { compose } from 'recompose'
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";
import { CartItem } from "../utilities/data/refactorMUIdata";
import { AddItemToCart } from "../thunk/Item/AddItemToCart";
import {
  OptionItemTable,
  ItemColumns,
} from "../utilities/Table/OptionTable";
import Button from '@material-ui/core/Button';
import BookIcon from '@material-ui/icons/Book';
import Modal from '../components/Modal'
import MyBorrowTable from '../components/Item/MyBorrowTable'
import socketIOClient from "socket.io-client";
import { deleteItem } from '../actions/ItemAction.systemadmin'
import config from '../env'
const ItemContainer = styled.div`
  padding-top: 5px;
  margin-top : 0%;
`;
const TableContainer = styled.div`
  margin-top: 0px;
`;
class Item extends React.Component {
  state = { modal: false }
  componentDidMount() {

    this.props.getAllItem();
    const socket = socketIOClient(config.socket);
    socket.on("removeItemById", data => {
      this.props.deleteItem(data)
    });
    socket.on("updateItem", data => {
      this.props.updateItem(data)
    });
  }
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.detail.itemDetail}/${value}`);
  };
  redirectToCartPage = (value) => {
    this.props.history.push(route.user.cart);
  };
  addItem = (item) => {
    this.props.addItemToCart(item)
    this.props.enqueueSnackbar('Add Item Success', {
      variant: 'success',
    });
  }
  handleClose = () => {
    this.setState({ modal: false })
  }

  render() {
    const { item } = this.props;
    const columns = ItemColumns(
      this.redirectToDetailPage,
      item.Cart,
      this.addItem,
      this.redirectToCartPage
    );
    return (
      <>
        {/* <Title title="Items" /> */}
        <ItemContainer className="item-table-cotainer">
          {/* Close Feature Flag */}
          {/* <AdvanceSearch /> */}
          <TableContainer>
            <ItemTable Items={item.filter.length > 0 ? item.filter : item.Items}
              item={item} loading={item.loading} Cart={item.Cart}
              columns={columns} options={OptionItemTable}
            />
          </TableContainer>
        </ItemContainer>
        <Modal open={this.state.modal} handleClose={this.handleClose}>
          <MyBorrowTable
            darkmode={this.props.theme}
          />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.Item, theme: state.WEB_CONFIG.darkmode };
};
export const mapDispatchToProps = (dispatch, ownProps) => ({
  addItemToCart: async (item) => {
    let data = CartItem(item);
    dispatch(AddItemToCart(data));
  },
  getAllItem: async () => {
    dispatch(GetAllItemThunk())
  },
  deleteItem: async (id) => {
    dispatch(deleteItem({ itemId: id }))
  },
  updateItem: async (value) => {
    dispatch({ type: "UPDATE_ITEM", payload: value })
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(Item);