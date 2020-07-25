import React from 'react'
import MUIDataTable from "mui-datatables";
import { OptionCartTable, CartColumns } from '../../utilities/Table/OptionCartTable'
import { deleteItemInCart } from '../../actions/ItemAction'
import { connect } from 'react-redux'
import { route } from '../../systemdata/route'
import { withRouter } from "react-router-dom";
class CartTable extends React.Component {
    redirectToDetailPage = (value) => {
        this.props.history.push(`${route.user.itemDetail}${value}`);
    };
    render() {

        const columns = CartColumns(this.redirectToDetailPage, this.props.deleteItem)
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

export default connect(null, mapDispatchToProps)(withRouter(CartTable))