import React from 'react'
import { GetItemDetail } from '../thunk/Item/ItemDetail.admin'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import WithLoading from '../utilities/WithLoading'
import Title from '../components/Title'
import Grid from '@material-ui/core/Grid'
import { renderImage } from '../utilities/getImage'
import Button from '@material-ui/core/Button';
import EditItem from '../components/ItemDetail/EditItemForm.admin'
import { AddItemThunk } from '../thunk/Item/AddItem.admin'
import { withSnackbar } from "notistack";
import { compose } from 'recompose'
const initailFormState = {
  itemDescription: "",
  itemModel: "",
  itemBrand: "",
  itemName: "",
  itemBorrowable: 1,
  itemImage: "",
  itemCategoryId: "",
  departmentId: "",
  changeStatus: "",
  amount: 1
}
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.inputFile = React.createRef();
    this.state = {
      Showimage: null,
      Form: initailFormState,
      EnableEdit: false
    };
  }
  sendData = () => {
    const addRes = this.props.addItem(this.state.Form)
    if (addRes) {
      this.props.enqueueSnackbar("Add Item Success", {
        variant: 'success',
      });
      this.setState({ Form: initailFormState, Showimage: null })

    } else {
      this.props.enqueueSnackbar("Add Item Fail", {
        variant: 'error',
      });
    }

  }
  handleChange = async (event) => {
    this.setState({ EnableEdit: event.target.checked })
  }
  setImage = (event) => {
    if (event.target.files[0]) {
      this.setState({ Showimage: URL.createObjectURL(event.target.files[0]) })
      this.setState({ Form: { ...this.state.Form, itemImage: event.target.files[0] } })
    } else {
      return
    }
  }
  clickToChangeImage = () => {
    this.inputFile.current.click()
  }
  render() {
    const { item } = this.props
    this.myRef = React.createRef();
    return (
      <div style={{ marginTop: '8%' }}>
        <WithLoading loading={item.loading} />
        <div style={{ marginTop: -20, }}>
          <Title title={`Add Item`} />
        </div>
        <Grid container spacing={3} style={{ marginTop: 20 }} >
          <Grid item xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={renderImage(this.state.Showimage === null ? null : this.state.Showimage)} alt="itemImage" style={{ width: 365, height: 270 }} />

            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={this.setImage}
              ref={this.inputFile}
            />
            <Button style={{ marginTop: 10 }} color="primary" variant="contained"
              onClick={this.clickToChangeImage}>Change Image</Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <EditItem
              item={this.state.Form}
              disabled={false}
              sendData={this.sendData}
              changeName={(value) => this.setState({ Form: { ...this.state.Form, itemName: value } })}
              changeModel={(value) => this.setState({ Form: { ...this.state.Form, itemModel: value } })}
              changeBrand={(value) => this.setState({ Form: { ...this.state.Form, itemBrand: value } })}
              changeDescription={(value) => this.setState({ Form: { ...this.state.Form, itemDescription: value } })}
              changeStatusId={(value) => this.setState({ Form: { ...this.state.Form, changeStatus: value } })}
              changeCategoryId={(value) => this.setState({ Form: { ...this.state.Form, itemCategoryId: value } })}
              changeDepartmentId={(value) => this.setState({ Form: { ...this.state.Form, departmentId: value } })}
              changeAmount={(value) => this.setState({ Form: { ...this.state.Form, amount: value } })}
              admin={true}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { item: state.ADMIN_Item, user: state.User }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getDetail: async (value) => {
    dispatch(GetItemDetail(value));
  },
  addItem: async (value) => {
    dispatch(AddItemThunk(value))
  }
})
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(AddItem)