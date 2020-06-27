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
class ItemTable extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`/detail/${value}`);
  };
  redirectToCartPage = (value) => {
    this.props.history.push(`/cart`);
  };
  render() {
    const { item } = this.props;
    const columns = ItemColumns(
      this.redirectToDetailPage,
      item.Cart,
      this.props.addItemToCart,
      this.redirectToCartPage
    );
    return (
      <React.Fragment>
        
        <WithLoading loading={item.loading}/>
        <MUIDataTable
          title={"ITEMS"}
          data={item.Items}
          columns={columns}
          options={OptionItemTable}
        />
      </React.Fragment>
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
