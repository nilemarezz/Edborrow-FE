
import React from 'react'
import { UserListThunk } from '../thunk/User/UserList.systemadmin'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Modal from '../components/Modal'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Users } from '../systemdata/User'
import MUIDataTable from "mui-datatables";
import { RefactorDate } from '../utilities/data/refactorDate'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { DeleteUserThunk } from '../thunk/User/DeleteUser.systemadmin'
import { compose } from 'recompose'
import { withSnackbar } from "notistack"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { route } from '../systemdata/route'
import { withRouter } from 'react-router-dom'

const column = (deleteUser) => [
  { name: Users.userId.id, label: Users.userId.label },
  { name: Users.Name.id, label: Users.Name.label },
  { name: Users.email.id, label: Users.email.label },
  { name: Users.userTelNo.id, label: Users.userTelNo.label },
  {
    name: Users.createDate.id, label: Users.createDate.label,
    options: {
      customBodyRender: (value, tableMeta, updateValue) =>
        RefactorDate(value),
    },
  },
  { name: Users.roleTag.id, label: Users.roleTag.label },
  {
    name: Users.userId.id, label: " ",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return <Button color="secondary" variant="contained" disabled={tableMeta.rowData[7] === 99 ? true : false} onClick={() => deleteUser(value)} ><DeleteForeverIcon /></Button>
      }

    },
  },
  {
    name: Users.roleId.id, label: " ", options: {
      display: false
    }
  },
]
const options = {
  selectableRows: false,
}
class UserList extends React.Component {
  state = { modal: false, user: null }
  componentDidMount() {
    this.props.UserListThunk()
  }
  deleteUser = async (userId) => {
    const isSuccess = await this.props.DeleteUserThunk(this.state.user)
    if (isSuccess) {
      this.props.enqueueSnackbar('Delete User Success', {
        variant: 'success',
      });
      this.setState({ modal: false, user: null })
    } else {
      this.props.enqueueSnackbar('Delete User Fail', {
        variant: 'error',
      });
      this.setState({ modal: false, user: null })
    }
  }
  handleModalClose = (userId) => {
    this.setState({ modal: false, user: null })
  }
  handleModalOpen = (userId) => {
    this.setState({ modal: true, user: userId })
  }
  render() {
    return (
      <div style={{ marginTop: '5%' }}>
        <div style={{ display: "flex", flexDirection: "row", lineHeight: 2, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ marginTop: -20, marginLeft: -37 }}>
            <Title title="Users" />
          </div>
          <div style={{ marginRight: 5 }}>
            <Button variant="contained" color="primary" onClick={() => this.props.history.push(route.systemadmin.createUser)}>
              <AddIcon />User</Button>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <MUIDataTable
            data={this.props.user.userList}
            columns={column(this.handleModalOpen)}
            options={options}
          />
        </div>
        <Modal open={this.state.modal}>
          <ConfirmModal onDelete={this.deleteUser} cancel={this.handleModalClose} />

        </Modal>
      </div>
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
          The User will be deleted in the system and cannot view that user.
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
  return { user: state.SYSTEM_ADMIN_UserList }
}

export default compose(connect(mapStateToProps, { UserListThunk, DeleteUserThunk }), withSnackbar, withRouter)(UserList)