import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem.admin";
import { connect } from "react-redux";
import AdvanceSearch from "../components/Item/AdvanceSearch";
import styled from "styled-components";
import {
  OptionItemTable,
  ItemColumns,
} from "../utilities/Table/OptionTable.admin";

const ItemContainer = styled.div`
  padding: 20px;
`;
const TableContainer = styled.div`
  margin-top: 10px;
`;
class Item extends React.Component {
  componentDidMount() {
    this.props.GetAllItemThunk();
  }
  redirectToDetail(value) {
    console.log(value)
  }
  render() {
    const { item } = this.props;
    const columns = ItemColumns(this.redirectToDetail)
    return (
      <>
        <ItemContainer className="item-table-cotainer">
          {/* Close Feature Flag */}
          {/* <AdvanceSearch /> */}
          <TableContainer>
            <ItemTable Items={item.filter.length > 0 ? item.filter : item.Items}
              item={item} loading={item.loading} Cart={item.Cart}
              columns={columns} options={OptionItemTable} />
          </TableContainer>
        </ItemContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.Item };
};
export default connect(mapStateToProps, { GetAllItemThunk })(Item);
