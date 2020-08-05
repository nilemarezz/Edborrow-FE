import React from "react";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  OptionItemTable,
  ItemColumns,
} from "../../utilities/Table/OptionTable";
import { addItemToCart } from "../../actions/ItemAction";
import { CartItem } from "../../utilities/data/refactorMUIdata";
import WithLoading from "../../utilities/WithLoading";
import { route } from '../../systemdata/route'
import { withSnackbar } from "notistack";
import { compose } from 'recompose'
class ItemTable extends React.Component {
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
    const { item, Items, loading, Cart } = this.props;
    const columns = ItemColumns(
      this.redirectToDetailPage,
      Cart,
      this.addItem,
      this.redirectToCartPage
    );
    return (
      <div style={{ padding: '0px 20px' }}>

        <WithLoading loading={loading} />
        <MUIDataTable
          title={"ITEMS"}
          data={Items}
          columns={columns}
          options={OptionItemTable}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  addItemToCart: async (item) => {
    let data = CartItem(item);
    dispatch(addItemToCart(data));
  },
});
export default compose(connect(null, mapDispatchToProps), withRouter, withSnackbar)(ItemTable);
