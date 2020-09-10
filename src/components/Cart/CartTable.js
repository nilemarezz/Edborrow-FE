import React from 'react'
import { CartColumns } from '../../utilities/Table/OptionCartTable'
import { deleteItemInCart, setFormDateCart, setToDateCart } from '../../actions/ItemAction'
import { setFormBorrowDate, setFormReturnDate } from '../../actions/ApplicationFormAction'
import { connect } from 'react-redux'
import { route } from '../../systemdata/route'
import { withRouter } from "react-router-dom";
import { compose } from 'recompose'
import { withSnackbar } from "notistack"
import DateInputRange from '../../components/Cart/DateInputRange'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { renderImage } from '../../utilities/getImage'
import { renderDepartment } from '../../utilities/Table/renderItemTable'
import { RefactorDateJS } from '../../utilities/data/RefactorDateJS'
class CartTable extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.detail.itemDetail}/${value}`);
  };
  deleteItemInCart = (value) => {
    this.props.deleteItem(value)

    // this.props.setBorrowDate(RefactorDateJS(borrowDate.sort((a, b) => a - b)[0]))
    // this.props.setReturnDate(RefactorDateJS(returnDate.slice(-1)[0]))
    this.props.enqueueSnackbar('Delete Item Success', {
      variant: 'success',
    });
  }
  setFormDate = (from) => {
    this.props.setFrom(from)
    if (this.props.form.borrowDate === "") {
      this.props.setBorrowDate(RefactorDateJS(from.from))
    } else {
      if (new Date(from.from) < new Date(this.props.form.borrowDate)) {
        this.props.setBorrowDate(RefactorDateJS(from.from))
      } else {
        return
      }
    }

  }
  setToDate = (to) => {
    this.props.setTo(to)
    if (this.props.form.returnDate === "") {
      this.props.setReturnDate(RefactorDateJS(to.to))
    } else {
      if (new Date(to.to) > new Date(this.props.form.returnDate)) {
        this.props.setReturnDate(RefactorDateJS(to.to))
      }
    }
  }
  render() {
    const columns = CartColumns(this.redirectToDetailPage, this.deleteItemInCart)
    return (
      <Table aria-label="simple table">

        {this.props.cart.map((row) => (
          <TableRow>
            <TableCell>{row.itemId}</TableCell>
            <TableCell >{row.itemName}</TableCell>
            <TableCell ><img src={renderImage(row.itemImage)} alt={row.itemId} height={50} width={50} /></TableCell>
            <TableCell >
              <DateInputRange itemId={row.itemId} setFormDate={this.setFormDate} setToDate={this.setToDate}
                from={row.date.from} to={row.date.to} disabledDate={row.dateUnavaliable} />
            </TableCell>
            <TableCell >{renderDepartment(row.departmentId, row.ownerName)}</TableCell>
            <TableCell >
              <Button variant="contained" color="primary" style={{ marginLeft: 20 }}>Detail</Button>
              <Button variant="contained" color="secondary" style={{ marginLeft: 20 }}
                onClick={() => this.deleteItemInCart(row.itemId)}>Delete</Button></TableCell>
            <TableCell ></TableCell>
          </TableRow>
        ))}
      </Table>
    )
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteItem: async (value) => {
    await dispatch(deleteItemInCart(value));
    let deletedArray = ownProps.cart.filter(x => x.itemId != value);
    if (deletedArray.length === 0) {
      dispatch(setFormBorrowDate(""))
      dispatch(setFormReturnDate(""))
    } else {
      let fromDate = []
      let toDate = []
      deletedArray.map(item => {
        fromDate.push(new Date(item.date.from))
        toDate.push(new Date(item.date.to))
      })
      dispatch(setFormBorrowDate(RefactorDateJS(fromDate.sort((a, b) => a - b)[0])))
      dispatch(setFormReturnDate(RefactorDateJS(toDate.slice(-1)[0])))
    }
  },
  setFrom: async (value) => {
    dispatch(setFormDateCart({ from: RefactorDateJS(value.from), itemId: value.itemId }));
  },
  setTo: async (value) => {
    dispatch(setToDateCart({ to: RefactorDateJS(value.to), itemId: value.itemId }));
  },
  setBorrowDate: async (value) => {
    dispatch(setFormBorrowDate(value))
  },
  setReturnDate: async (value) => {
    dispatch(setFormReturnDate(value))
  }
})

export const mapStateToProps = (state) => {
  return { form: state.Form, cart: state.Item.Cart }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(CartTable)