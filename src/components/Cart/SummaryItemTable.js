import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { renderDepartment } from "../../utilities/Table/renderItemTable";

const columns = ["ID", "Name", "Picture", "Owner", "Date", "Number"]
const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 20
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column}

                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.cart.map(item => (
              <TableRow key={item.itemId}>
                <TableCell component="th" scope="row">
                  {item.itemId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.itemName}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img src={item.itemImage} alt="imageEquipment" width={60} height={60} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.departmentId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.date.from} to {item.date.to}
                </TableCell>
                <TableCell component="th" scope="row">
                  x 1
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={props.cart.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
