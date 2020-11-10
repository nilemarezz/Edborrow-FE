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
import Button from '@material-ui/core/Button';
import { renderDepartment } from '../../utilities/Table/renderItemTable'
import { RefactorDateJS } from '../../utilities/data/RefactorDateJS'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { SetAmountThunk } from '../../thunk/Item/SetAmount'
import CircularProgress from '@material-ui/core/CircularProgress';

class CartTable extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.detail.itemDetail}/${value}`);
  };
  deleteItemInCart = (value) => {
    this.props.deleteItem(value)
    this.props.enqueueSnackbar('Delete Item Success', {
      variant: 'success',
    });
  }
  setFormDate = (from) => {
    let cartIndex = this.props.cart.findIndex(item => item.itemId === from.itemId)
    this.props.setFrom(from)
    if (this.props.form.borrowDate === "") {
      console.log('1')
      this.props.setBorrowDate(RefactorDateJS(from.from))
      if (this.props.cart[cartIndex].date.to !== null) {
        console.log('2')
        this.setAmount(this.props.cart[cartIndex].itemId, this.props.cart[cartIndex].date.from, this.props.cart[cartIndex].date.to)
      }
    } else {
      console.log('3')
      if (new Date(from.from) < new Date(this.props.form.borrowDate)) {
        console.log('4')
        this.props.setBorrowDate(RefactorDateJS(from.from))
        if (this.props.cart[cartIndex].date.to !== null) {
          this.setAmount(this.props.cart[cartIndex].itemId, this.props.cart[cartIndex].date.from, this.props.cart[cartIndex].date.to)
        }
      } else {
        if (this.props.cart[cartIndex].date.to !== null) {
          this.setAmount(this.props.cart[cartIndex].itemId, this.props.cart[cartIndex].date.from, this.props.cart[cartIndex].date.to)
        }
      }
    }
  }
  setToDate = (to) => {
    let cartIndex = this.props.cart.findIndex(item => item.itemId === to.itemId)
    this.props.setTo(to)
    if (this.props.form.returnDate === "") {
      console.log(1)
      this.props.setReturnDate(RefactorDateJS(to.to))
      if (this.props.cart[cartIndex].date.from !== null) {
        console.log(2)
        this.setAmount(this.props.cart[cartIndex].itemId, this.props.cart[cartIndex].date.from, this.props.cart[cartIndex].date.to)
      }
    } else {
      console.log(3)
      if (new Date(to.to) > new Date(this.props.form.returnDate)) {
        console.log(4)
        this.props.setReturnDate(RefactorDateJS(to.to))
        if (this.props.cart[cartIndex].date.from !== null) {
          console.log(5)
          this.setAmount(this.props.cart[cartIndex].itemId, this.props.cart[cartIndex].date.from, this.props.cart[cartIndex].date.to)
        } else {
          console.log(6)
        }
      } else {
        if (this.props.cart[cartIndex].date.from !== null) {
          console.log(5)
          this.setAmount(this.props.cart[cartIndex].itemId, this.props.cart[cartIndex].date.from, this.props.cart[cartIndex].date.to)
        }
      }
    }
  }
  setAmountSelect = amount => {
    this.props.setSelectAmount(amount)
  }
  setAmount = (id, from, to) => {
    console.log('set')
    let data = { itemId: id, borrowData: from, returnDate: to }
    this.props.setAmount(data)
  }
  render() {
    const columns = CartColumns(this.redirectToDetailPage, this.deleteItemInCart)
    return (
      <>
        {this.props.cart.map((row, i) => {
          return (
            <Paper style={{ marginTop: 10, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  {row.itemName}
                </Grid>
                <Grid item xs={2}>
                  {renderDepartment(row.departmentId, row.ownerName)}
                </Grid>
                <Grid item xs={4}>
                  <DateInputRange itemId={row.itemId} setFormDate={this.setFormDate} setToDate={this.setToDate}
                    from={row.date.from} to={row.date.to} disabledDate={row.dateUnavaliable} />
                </Grid>
                {row.amountLeft === null ?
                  <Grid item xs={2}>
                    {/* <Button variant="contained" color="primary" size="small"
                      disabled={row.date.from === null || row.date.to === null ? true : false}
                      onClick={() => this.setAmount(row.itemId, row.date.from, row.date.to)}>{row.loading ? <CircularProgress color="secondary" size={20} /> : "GET AMOUNT"}</Button> */}
                    {row.loading ? <CircularProgress color="secondary" size={20} /> : <span style={{ color: 'red' }}>Please select date </span>}
                  </Grid>
                  : <Grid item xs={1}>
                    <TextField
                      id="standard-read-only-input"
                      type="number"
                      style={{ width: '25px' }}
                      value={row.amount}
                      InputProps={{ inputProps: { min: 1, max: row.amountLeft } }}
                      onChange={(e) => this.setAmountSelect({ id: row.itemId, amount: e.target.value === "" ? 0 : e.target.value })}
                    /> of {row.amountLeft}
                  </Grid>
                }
                <Grid item xs={2}>
                  <Button variant="contained" color="secondary" size="small" style={{ marginLeft: 20 }}
                    onClick={() => this.deleteItemInCart(row.itemId)}><DeleteIcon /></Button>
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
  },
  setAmount: async (value) => {
    dispatch(SetAmountThunk(value))
    // duspatch()
  }
})

export const mapStateToProps = (state) => {
  return { form: state.Form, cart: state.Item.Cart }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(CartTable)