export const checkAddUser = (value) => {
  if (value.userId === "" && value.firstName === "" && value.lastName === "" &&
    value.password === "" && value.email === "" && value.telNo === "" && value.role === null) {
    return false
  } else {
    return true
  }
}