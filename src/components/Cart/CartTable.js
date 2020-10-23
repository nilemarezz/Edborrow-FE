import React from 'react'
import { CartColumns } from '../../utilities/Table/OptionCartTable'
import { deleteItemInCart, setFormDateCart, setToDateCart, setSelectAmount } from '../../actions/ItemAction'
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
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
  setAmountSelect = amount => {
    this.props.setSelectAmount(amount)
  }
  render() {
    const columns = CartColumns(this.redirectToDetailPage, this.deleteItemInCart)
    return (

      <>
        {this.props.cart.map((row) => {
          return (
            <Paper style={{ marginTop: 10, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  {row.itemId}
                </Grid>
                <Grid item xs={3}>
                  {row.itemName}
                </Grid>
                <Grid item xs={4}>
                  <DateInputRange itemId={row.itemId} setFormDate={this.setFormDate} setToDate={this.setToDate}
                    from={row.date.from} to={row.date.to} disabledDate={row.dateUnavaliable} />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id="standard-read-only-input"
                    type="number"
                    style={{ width: '25px' }}
                    value={row.amountSelect}
                    InputProps={{ inputProps: { min: 1, max: row.amount } }}
                    onChange={(e) => this.setAmountSelect({ id: row.itemId, amount: e.target.value === "" ? 1 : e.target.value })}
                  /> of {row.amount}
                </Grid>
                <Grid item xs={1}>
                  {renderDepartment(row.departmentId, row.ownerName)}
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" size="small" style={{ marginLeft: 20 }}>Detail</Button>
                  <Button variant="contained" color="secondary" size="small" style={{ marginLeft: 20 }}
                    onClick={() => this.deleteItemInCart(row.itemId)}>Delete</Button>
                </Grid>
              </Grid>
            </Paper>

          )
        }
        )}
      </>
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
  },
  setSelectAmount: async (value) => {
    dispatch(setSelectAmount(value))
  }
})

export const mapStateToProps = (state) => {
  return { form: state.Form, cart: state.Item.Cart }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(CartTable)