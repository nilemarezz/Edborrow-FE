import React from 'react'
import { GetItemDetail } from '../thunk/Item/ItemDetail.admin'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import WithLoading from '../utilities/WithLoading'
import Title from '../components/Title'
import Grid from '@material-ui/core/Grid'
import { renderImage } from '../utilities/getImage'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import EditItem from '../components/ItemDetail/EditItemForm.admin'
import GetItemDetailService from '../services/ItemService/GetItemDetail'
import { EditItemThunk } from '../thunk/Item/EditItem.admin'
import { itemLoading } from '../actions/ItemAction.admin'
import { withSnackbar } from "notistack";
import { compose } from 'recompose'

const initailFormState = {
  itemDescription: null,
  itemModel: null,
  itemBrand: null,
  itemName: null,
  itemBorrowable: null,
  itemImage: null,
  itemCategoryId: null
}
class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.inputFile = React.createRef();
    this.state = {
      Showimage: null,
      Form: initailFormState,
      EnableEdit: false
    };
  }
  sendData = async () => {
    const editRes = await this.props.editItem(this.state.Form)
    console.log(editRes)
    if (editRes) {
      this.props.enqueueSnackbar("Edit Item Success", {
        variant: 'success',
      });
      this.setForm()
      this.setState({ EnableEdit: false })
    } else {
      this.props.enqueueSnackbar("It not your item or something went wrong.", {
        variant: 'error',
      });
    }

  }
  setForm = async () => {
    this.props.onLoad(true)
    const detail = await GetItemDetailService(this.props.match.params.id)
    this.setState({
      Form: {
        itemId: this.props.match.params.id,
        itemDescription: detail.itemDescription,
        itemModel: detail.itemModel,
        itemBrand: detail.itemBrand,
        itemName: detail.itemName,
        itemBorrowable: detail.itemBorrowable,
        itemImage: detail.itemImage,
        itemCategoryId: detail.categoryId
      }
    })
    this.props.onLoad(false)
  }
  componentDidMount() {
    this.setForm()
    this.props.getDetail(this.props.match.params.id)
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
      <>
        <WithLoading loading={item.loading} />
        <div style={{ marginTop: -20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div>
            <Title title={`Item ID: ${item.Detail.itemId}`} />
          </div>
          <div style={{ marginLeft: 30, marginTop: 25 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.EnableEdit}
                  onChange={this.handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Enable Edit"
            />
          </div>
        </div>
        <Grid container spacing={3} style={{ marginTop: 20 }} >
          <Grid item xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={renderImage(this.state.EnableEdit ? this.state.Showimage === null ? item.Detail.itemImage : this.state.Showimage : item.Detail.itemImage)} alt="itemImage" style={{ width: 365, height: 270 }} />

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
              disabled={!this.state.EnableEdit}
              onClick={this.clickToChangeImage}>Change Image</Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <EditItem
              item={this.state.EnableEdit ? this.state.Form : item.Detail}
              disabled={!this.state.EnableEdit}
              sendData={this.sendData}
              changeName={(value) => this.setState({ Form: { ...this.state.Form, itemName: value } })}
              changeModel={(value) => this.setState({ Form: { ...this.state.Form, itemModel: value } })}
              changeBrand={(value) => this.setState({ Form: { ...this.state.Form, itemBrand: value } })}
              changeDescription={(value) => this.setState({ Form: { ...this.state.Form, itemDescription: value } })}
              changeBorrowable={(value) => this.setState({ Form: { ...this.state.Form, itemBorrowable: value } })}
              changeCategoryId={(value) => this.setState({ Form: { ...this.state.Form, itemCategoryId: value } })}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { item: state.ADMIN_Item }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getDetail: async (value) => {
    dispatch(GetItemDetail(value));
  },
  editItem: async (value) => {
    const isEditSuccess = dispatch(EditItemThunk(value))
    return isEditSuccess

  },
  onLoad: async (value) => {
    dispatch(itemLoading(value))
  }
})
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withSnackbar)(ItemDetail)