import React from "react";
import MUIDataTable from "mui-datatables";
import { AddItemToCart } from "../../thunk/Item/AddItemToCart";
import { CartItem } from "../../utilities/data/refactorMUIdata";
import WithLoading from "../../utilities/WithLoading";
class ItemTable extends React.Component {

  render() {
    const { item, Items, loading, columns, options } = this.props;
    return (
      <div style={{ padding: '0px 20px' }}>

        <WithLoading loading={loading} />
        <MUIDataTable
          title={"ITEMS"}
          data={Items}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default ItemTable;
