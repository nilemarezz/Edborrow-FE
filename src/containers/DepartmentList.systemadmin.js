import React from 'react'
import { connect } from 'react-redux'
import { GetDepartment } from '../thunk/Department/getDepartment.systemadmin'
import MUIDataTable from "mui-datatables";
import { DepartmentTable, OptionDrpartmentTable } from '../utilities/Table/OptionDepartmentListTable.systemadmin'
import { compose } from 'recompose'
import Modal from '../components/Modal'
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withSnackbar } from "notistack"
import { DeleteDepartmnet as DeleteDepartmnetThunk } from '../thunk/Department/DeleteDepartment.systemadmin'
import Title from '../components/Title'
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom'
import { route } from '../systemdata/route'
class DeparmentList extends React.Component {
  state = { modal: false, department: null }
  componentDidMount() {

    this.props.GetDepartment()
  }
  handleModalOpen = (id, userId) => {
    this.setState({ modal: true })
    this.setState({ department: { departmentId: id, userId: userId } })

  }
  handleModalClose = (id) => {
    this.setState({ modal: false })
    this.setState({ department: null })

  }
  deleteDepartment = () => {
    const deletesuccess = this.props.DeleteDepartmnetThunk(this.state.department)
    if (deletesuccess) {
      this.props.enqueueSnackbar('Delete Item Success', {
        variant: 'success',
      });
    } else {
      this.props.enqueueSnackbar('Delete Item Fail', {
        variant: 'error',
      });
    }
    this.setState({ department: null })
    this.setState({ modal: false })
  }
  render() {
    const columns = DepartmentTable(this.handleModalOpen)
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row", lineHeight: 2, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ marginTop: -20, marginLeft: -37 }}>
            <Title title="Department" />
          </div>
          <div style={{ marginRight: 5 }}>
            <Button variant="contained" color="primary" onClick={() => this.props.history.push(route.systemadmin.addDepartment)}>
              <AddIcon />Department</Button>
          </div>
        </div>
        <MUIDataTable
          data={this.props.department.departmentList}
          columns={columns}
          options={OptionDrpartmentTable}
        />
        <Modal open={this.state.modal}>
          <ConfirmModal onDelete={this.deleteDepartment} cancel={this.handleModalClose} />

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
const mapStateToProps = (state) => {
  return { department: state.SYSTEM_ADMIN_Department };
};

export default compose(connect(mapStateToProps, { GetDepartment, DeleteDepartmnetThunk }), withSnackbar, withRouter)(DeparmentList)