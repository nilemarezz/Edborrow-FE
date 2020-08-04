import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import { GetApplicationList } from '../thunk/Application/ApplicationList.admin'
import { ChangeApproveStatus } from '../thunk/Application/ChangeApproveStatus.admin'
import { ChangeBorrowingStatus } from '../thunk/Application/ChangeBorrowingStatus.admin'
import { RejectApproveStatus } from '../thunk/Application/RejectApproveStatus.admin'
import { ApplicationOptions, ApplicationColumn } from '../utilities/Table/OptionApplicationTable.admin'
import WithLoading from '../utilities/WithLoading'
import Modal from '../components/Modal'
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class ApplicationList extends React.Component {
  state = { modal: false, itemId: null, requestId: null, value: null }

  componentDidMount() {
    this.props.GetApplicationList()
  }
  changeApproveStatus = (text) => {
    if (this.state.value === 1) {
      this.props.ChangeApproveStatus(this.state.itemId, this.state.requestId, this.state.value)
      this.props.ChangeBorrowingStatus(this.state.itemId, this.state.requestId, 6)
    } else if (this.state.value === 0) {
      this.props.ChangeApproveStatus(this.state.itemId, this.state.requestId, this.state.value)
      this.props.RejectApproveStatus(text, this.state.itemId, this.state.requestId, this.state.value)
    }
    this.setState({ modal: false })
  }
  openConfirmModal = (itemId, requestId, value) => {
    this.setState({ modal: true, itemId: itemId, requestId: requestId, value: value })
  }
  changeBorrowingStatus = (itemId, requestId, value) => {
    this.props.ChangeBorrowingStatus(itemId, requestId, value)
  }
  handleClose = () => {
    this.setState({ modal: false })
  }

  render() {
    const options = ApplicationOptions()
    const columns = ApplicationColumn(this.openConfirmModal, this.changeBorrowingStatus)
    return (
      <>
        <WithLoading loading={this.props.loading} />
        <MUIDataTable
          title={"Request List"}
          data={this.props.applicationList}
          columns={columns}
          options={options}
        />
        <Modal open={this.state.modal}>
          <ConfirmModal
            changeApproveStatus={this.changeApproveStatus}
            value={this.state.value}
            handleClose={this.handleClose}
          />
        </Modal>
      </>
    )
  }
}

const ConfirmModal = (props) => {
  const [text, setText] = useState()
  const { value, changeApproveStatus, handleClose } = props
  return (
    <Dialog open={true} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Confirm</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure to approve/reject this request? You can not change the
          status after you approve/reject this request.
          </DialogContentText>
        {value === 0 ? (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reason why you reject"
            type="email"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
            ""
          )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => changeApproveStatus(text)} color="primary">
          Confirm
          </Button>
        <Button onClick={handleClose} color="primary">
          Cancle
          </Button>
      </DialogActions>
    </Dialog>
  )
}
const mapStateToProps = (state) => {
  return { applicationList: state.ADMIN_ApplicationList.applicationList, loading: state.ADMIN_ApplicationList.loading };
};

export default connect(mapStateToProps, { GetApplicationList, ChangeApproveStatus, ChangeBorrowingStatus, RejectApproveStatus })(ApplicationList)