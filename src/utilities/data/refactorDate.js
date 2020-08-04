export const RefactorDate = (date) => {
  // // console.log(date)
  // const date = '2020-08-20T00:00:00.000Z';
  // // 2020-08-20 00:00:00
  return `${date.toString().substring(0, 10)} ${date.toString().substring(11, 19)}`
}
