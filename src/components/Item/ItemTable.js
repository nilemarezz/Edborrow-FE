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
class ItemTable extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.user.itemDetail}${value}`);
  };
  redirectToCartPage = (value) => {
    this.props.history.push(route.user.cart);
  };
  render() {
    const { item, Items, loading, Cart } = this.props;
    const columns = ItemColumns(
      this.redirectToDetailPage,
      Cart,
      this.props.addItemToCart,
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
export default connect(null, mapDispatchToProps)(withRouter(ItemTable));
