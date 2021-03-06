import React from 'react'

import Title from '../components/Title'
import { connect } from "react-redux";
import {
  setFormDepartmentBuilding,
  setFormDepartmentEmail, setFormDepartmentFloor, setFormDepartmentName, setFormDepartmentRoom, setFormDepartmentTel,
  setFormID, setFormName, setFormPassword, setFormSurname
} from '../actions/AddDepartmantForm'
import WithLoading from '../utilities/WithLoading'
import DepartmentForm from '../components/DepartmentForm/Form.systemadmin'
import { AddDepartment as AddDepartmentThunk } from '../thunk/Form/addDepartmentForm'
import { withSnackbar } from "notistack";

class AddDepartment extends React.Component {
  sendData = async () => {
    const value = {
      userId: this.props.form.userId,
      firstName: this.props.form.firstName,
      lastName: this.props.form.lastName,
      password: this.props.form.password,
      departmentName: this.props.form.departmentName,
      departmentTelNo: this.props.form.departmentTelNo,
      departmentEmail: this.props.form.departmentEmail,
      placeBuilding: this.props.form.placeBuilding,
      placeFloor: this.props.form.placeFloor,
      placeRoom: this.props.form.placeRoom,
    }
    const sendSuccess = await this.props.addDepartment(value)
    if (sendSuccess) {
      this.props.enqueueSnackbar("Add Department Success", {
        variant: 'success',
      });
    } else {
      this.props.enqueueSnackbar("Add Department Fail", {
        variant: 'error',
      });
    }

  }
  render() {
    const { loading } = this.props.form
    return (
      <div style={{ marginTop: '8%' }}>
        <WithLoading loading={loading} />
        <div style={{ marginTop: -30 }}>
          <div style={{ marginLeft: -37 }}>
            <Title title="Add Department" />
          </div>
          <div style={{ marginTop: 20 }}><DepartmentForm data={this.props} sendData={this.sendData} /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { form: state.SYSTEM_ADMIN_Department };
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setId: async (value) => {
    dispatch(setFormID(value));
  },
  setName: async (value) => {
    dispatch(setFormName(value));
  },
  setSurname: async (value) => {
    dispatch(setFormSurname(value));
  },
  setPassword: async (value) => {
    dispatch(setFormPassword(value));
  },
  setDepartmentName: async (value) => {
    dispatch(setFormDepartmentName(value));
  },
  setDepartmentTel: async (value) => {
    dispatch(setFormDepartmentTel(value));
  },
  setDepartmentEmail: async (value) => {
    dispatch(setFormDepartmentEmail(value));
  },
  setDepartmentBuilding: async (value) => {
    dispatch(setFormDepartmentBuilding(value));
  },
  setDepartmentFloor: async (value) => {
    dispatch(setFormDepartmentFloor(value));
  },
  setDepartmentRoom: async (value) => {
    dispatch(setFormDepartmentRoom(value));
  },
  addDepartment: async (value) => {
    const issuccess = await dispatch(AddDepartmentThunk(value))
    return issuccess
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(AddDepartment))