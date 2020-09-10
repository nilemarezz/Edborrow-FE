import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem";
import { connect } from "react-redux";
import AdvanceSearch from "../components/Item/AdvanceSearch";
import styled from "styled-components";
import Title from '../components/Title'
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

const ItemContainer = styled.div`
  padding: 20px;
`;
const TableContainer = styled.div`
  margin-top: 10px;
`;
class Item extends React.Component {
  componentDidMount() {
    this.props.getAllItem();
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.Item };
};
export const mapDispatchToProps = (dispatch, ownProps) => ({
  addItemToCart: async (item) => {
    let data = CartItem(item);
    dispatch(AddItemToCart(data));
  },
  getAllItem: async () => {
    dispatch(GetAllItemThunk())
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(Item);