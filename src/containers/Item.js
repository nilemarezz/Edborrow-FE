import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem";
import { connect } from "react-redux";
class Item extends React.Component {
  componentDidMount() {
    this.props.GetAllItemThunk();
  }

  render() {
    const { item } = this.props;
    return <ItemTable item={item} />;
  }
}

const mapStateToProps = (state) => {
  return { item: state.Item };
};
export default connect(mapStateToProps, { GetAllItemThunk })(Item);
