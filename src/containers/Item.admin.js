import React from "react";
import ItemTable from "../components/Item/ItemTable";
import { GetAllItemThunk } from "../thunk/Item/GetAllItem.admin";
import { connect } from "react-redux";
import { route } from '../systemdata/route'
import styled from "styled-components";
import { DeleteItemThunk } from '../thunk/Item/DeleteItem.admin'
import {
  OptionItemTable,
  ItemColumns,
} from "../utilities/Table/OptionTable.admin";
import { withRouter } from "react-router-dom";
import { compose } from 'recompose'
import Modal from '../components/Modal'
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withSnackbar } from "notistack"
import Title from '../components/Title'
import AddIcon from '@material-ui/icons/Add';


const ItemContainer = styled.div`
  padding: 20px;
`;
const TableContainer = styled.div`
  margin-top: 10px;
`;
class Item extends React.Component {
  state = { modal: false, item: null }
  componentDidMount() {
    this.props.GetAllItemThunk();
  }
  handleModalOpen = (id) => {
    this.setState({ modal: true })
    this.setState({ item: id })

  }
  handleModalClose = (id) => {
    this.setState({ modal: false })
    this.setState({ item: null })

  }
  deleteItem = () => {

    const deletesuccess = this.props.DeleteItemThunk({ itemId: this.state.item })
    if (deletesuccess) {
      this.props.enqueueSnackbar('Delete Item Success', {
        variant: 'success',
      });
    } else {
      this.props.enqueueSnackbar('Delete Item Fail', {
        variant: 'error',
      });
    }
    this.setState({ item: null })
    this.setState({ modal: false })
  }
  render() {
    const { item } = this.props;
    const columns = ItemColumns(this.props.user.department, this.handleModalOpen)
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row", lineHeight: 2, justifyContent: 'space-between', alignItems: 'center', marginTop: '4%' }}>
          <div style={{ marginTop: -20, }}>
            <Title title="Items" />
          </div>
          {this.props.user.department === true ? null :
            <div style={{ marginRight: 40 }}>
              <Button variant="contained" color="primary" onClick={() => this.props.history.push(route.admin.additem)}>
                <AddIcon />Items</Button>
            </div>
          }
        </div>
        <ItemContainer className="item-table-cotainer">
          {/* Close Feature Flag */}
          {/* <AdvanceSearch /> */}
          <TableContainer>
            <ItemTable Items={item.Items}
              loading={item.loading}
              columns={columns} options={OptionItemTable} />
          </TableContainer>
        </ItemContainer>
        <Modal open={this.state.modal}>

          <ConfirmModal onDelete={this.deleteItem} cancel={this.handleModalClose} />

        </Modal>
      </>
    );
  }
}

const ConfirmModal = (props) => {
  const { onDelete, cancel } = props
  return (
    <Dialog open={true} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Confirm Deleting</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The Item will be deleted in the system and cannot view that item.
          </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={() => onDelete()} color="primary">
          Confirm
          </Button>
        <Button onClick={() => cancel()} color="primary">
          Cancle
          </Button>
      </DialogActions>
    </Dialog>
  )
}
const mapStateToProps = (state) => {
  return { item: state.ADMIN_Item, user: state.User };
};


export default compose(connect(mapStateToProps, { GetAllItemThunk, DeleteItemThunk }), withRouter, withSnackbar)(Item);

