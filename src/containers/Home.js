import React from "react";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem";
import { connect } from "react-redux";
import WithLoading from "../utilities/WithLoading";
class Home extends React.Component {
  componentDidMount() {
    this.props.GetAllItemThunk();
  }
  render() {
    return (
      <div>
        <WithLoading loading={this.props.items.loading} />
        <h1>Hello</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.Item };
};
export default connect(mapStateToProps, { GetAllItemThunk })(Home);
