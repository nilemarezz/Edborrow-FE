import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem.admin";
import { connect } from "react-redux";
import { route } from '../systemdata/route'
import styled from "styled-components";
import {
  OptionItemTable,
  ItemColumns,
} from "../utilities/Table/OptionTable.admin";
import { withRouter } from "react-router-dom";
import { compose } from 'recompose'
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
  render() {
    const { item } = this.props;
    const columns = ItemColumns()
    return (
      <>
        <ItemContainer className="item-table-cotainer">
          {/* Close Feature Flag */}
          {/* <AdvanceSearch /> */}
          <TableContainer>
            <ItemTable Items={item.Items}
              loading={item.loading}
              columns={columns} options={OptionItemTable} />
          </TableContainer>
        </ItemContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.ADMIN_Item };
};
export default compose(connect(mapStateToProps, { GetAllItemThunk }), withRouter)(Item);

