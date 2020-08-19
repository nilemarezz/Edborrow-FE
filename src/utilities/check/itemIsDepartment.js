export const checkName = (departmentId, departmentName, userId, Name) => {
  if (departmentId) {
    return departmentName
  } else if (userId) {
    return Name
  } else {
    return "-"
  }
}

export const checkEmail = (departmentId, departmentEmail, userId, email) => {
  if (departmentId) {
    return departmentEmail
  } else if (userId) {
    if (email === "") {
      return "-"
    } else {
      return email
    }
  } else {
    return "-"
  }
}

export const checkTelNo = (departmentId, departmentTelNo, userId, userTelNo) => {
  if (departmentId) {
    return departmentTelNo
  } else if (userId) {
    if (userTelNo === "") {
      return "-"
    } else {
      return userTelNo
    }
  } else {
    return "-"
  }
}