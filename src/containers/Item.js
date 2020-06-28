import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem";
import { connect } from "react-redux";
import AdvanceSearch from "../components/Item/AdvanceSearch";
import styled from "styled-components";
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
    return (
      <ItemContainer className="item-table-cotainer">
        <AdvanceSearch />
        <TableContainer>
          <ItemTable Items={ item.filter.length > 0 ? item.filter : item.Items} item = {item} loading={item.loading} Cart={item.Cart}/>
        </TableContainer>
      </ItemContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.Item };
};
export default connect(mapStateToProps, { GetAllItemThunk })(Item);
