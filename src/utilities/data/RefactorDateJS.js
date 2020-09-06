export const RefactorDateJS = (value) => {
  if (value) {
    return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate();
  } else {
    return null
  }
}

export const RefactorDateWithTimeJS = (value) => {
  if (value) {
    return value.getUTCFullYear() + "-" + (value.getUTCMonth() + 1) + "-" + value.getUTCDate() + " " + value.getUTCHours() + ":" + value.getUTCMinutes() + ":" + value.getUTCSeconds();
  } else {
    return null
  }
}