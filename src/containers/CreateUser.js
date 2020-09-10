import React from 'react'
import Title from '../components/Title'
import WithLoading from '../utilities/WithLoading'
import UserFrom from '../components/User/UserFrom.systemadmin'
import { withSnackbar } from "notistack";
import AddUserSercive from '../services/UserService/AddUser'
import { checkAddUser } from '../utilities/check/checkAddUser'
class AddDepartment extends React.Component {
  state = { userId: null, firstName: null, lastName: null, password: null, email: null, telNo: null, role: null }
  sendData = async () => {
    const value = {
      userId: this.state.userId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
      telNo: this.state.telNo,
      role: this.state.role
    }
    const check = checkAddUser(value)
    if (check) {
      const sendSuccess = await AddUserSercive(value)
      if (sendSuccess.result === "success") {
        this.props.enqueueSnackbar("Add Department Success", {
          variant: 'success',
        });
        this.setState({ userId: "", firstName: "", lastName: "", password: "", email: "", telNo: "", role: null })
      } else {
        this.props.enqueueSnackbar("Add Department Fail", {
          variant: 'error',
        });
      }
    } else {
      this.props.enqueueSnackbar("Missing value", {
        variant: 'error',
      });
    }

  }
  render() {
    return (
      <>
        <div style={{ marginTop: -30 }}>
          <div style={{ marginLeft: -37 }}>
            <Title title="Add Users" />
          </div>
          <UserFrom data={this.state} sendData={this.sendData}
            setuserId={(value) => this.setState({ userId: value })}
            setfirstName={(value) => this.setState({ firstName: value })}
            setlastName={(value) => this.setState({ lastName: value })}
            setEmail={(value) => this.setState({ email: value })}
            setpassword={(value) => this.setState({ password: value })}
            settelNo={(value) => this.setState({ telNo: value })}
            setRole={(value) => this.setState({ role: value })}
          />
        </div>
      </>
    )
  }
}


export default (withSnackbar(AddDepartment))