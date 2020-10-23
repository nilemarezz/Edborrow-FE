import React from 'react';
import MUIDataTable from "mui-datatables";
import { ItemColumns, OptionItemTable } from '../utilities/Table/OptionItemTable.systemadmin'
import { connect } from 'react-redux'
import { GetAllItemThunk } from '../thunk/Item/GetAllItem.systemadmin'
import { DeleteItemThunk } from '../thunk/Item/DeleteItem.systemadmin'
import WithLoading from '../utilities/WithLoading'
import { compose } from 'recompose'
import { withSnackbar } from "notistack"
import Modal from '../components/Modal'
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Title from '../components/Title'
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom'
import { route } from '../systemdata/route'
import config from '../env'
import socketIOClient from "socket.io-client";
class Items extends React.Component {
  state = { modal: false, item: null }
  componentDidMount() {
    this.props.getItem()
    const socket = socketIOClient(config.socket);
    socket.on("updateItem", data => {
      this.props.getItem()
    });
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

    const deletesuccess = this.props.deleteItem({ itemId: this.state.item })
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
    const columns = ItemColumns(this.handleModalOpen)
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row", lineHeight: 2, justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
          <div style={{ marginTop: -20, marginLeft: -37 }}>
            <Title title="Items" />
          </div>
          <div style={{ marginRight: 5 }}>
            <Button variant="contained" color="primary" onClick={() => this.props.history.push(route.systemadmin.addItem)}>
              <AddIcon />Item</Button>
          </div>
        </div>
        <WithLoading loading={this.props.loading} />
        <div style={{ marginTop: 20 }}>
          <MUIDataTable
            columns={columns}
            data={this.props.items}
            options={OptionItemTable}

          />
        </div>
        <Modal open={this.state.modal}>

          <ConfirmModal onDelete={this.deleteItem} cancel={this.handleModalClose} />

        </Modal>
      </>
    )
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
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getItem: async () => {
    dispatch(GetAllItemThunk())
  },
  deleteItem: async (value) => {
    dispatch(DeleteItemThunk(value))
  }

});

export const mapStateToProps = (state) => {
  return { items: state.SYSTEM_ADMIN_Items.Items, loading: state.SYSTEM_ADMIN_Items.loading }
}
export default compose(connect(mapStateToProps, mapDispatchToProps), withSnackbar, withRouter)(Items)