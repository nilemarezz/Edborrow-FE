import React from 'react'
import MUIDataTable from "mui-datatables";
import { OptionCartTable, CartColumns } from '../../utilities/Table/OptionCartTable'
import { deleteItemInCart } from '../../actions/ItemAction'
import { connect } from 'react-redux'
import { route } from '../../systemdata/route'
import { withRouter } from "react-router-dom";
import { compose } from 'recompose'
import { withSnackbar } from "notistack"

class CartTable extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.detail.itemDetail}/${value}`);
  };
  deleteItemInCart = (value) => {
    this.props.deleteItem(value)
    this.props.enqueueSnackbar('Delete Item Success', {
      variant: 'success',
    });
  }
  render() {

    const columns = CartColumns(this.redirectToDetailPage, this.deleteItemInCart)
    return (
      <div style={{ marginTop: 20 }}>
        <MUIDataTable
          title={"Cart"}
          data={this.props.cart}
          columns={columns}
          options={OptionCartTable}
        />
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteItem: async (value) => {
    dispatch(deleteItemInCart(value));
  }
})

export default compose(connect(null, mapDispatchToProps), withRouter, withSnackbar)(CartTable)