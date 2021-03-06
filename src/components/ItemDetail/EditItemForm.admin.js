import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ItemBorrowableToBoolean, BooleanToItemBorrowable } from '../../utilities/check/ItemBorrowableToBoolean'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ItemCategory } from '../../systemdata/ItemCategory'
import DepartmentForm from '../DepartmentFetchForm'
import { ItemStatusLabel } from '../../systemdata/ItemStatus'
class EditItem extends React.Component {
  submit = (e) => {
    e.preventDefault()
    this.props.sendData()
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <TextField label="Name"
          value={this.props.item.itemName} fullWidth variant="outlined" InputLabelProps={{
            shrink: true,
          }}
          disabled={this.props.disabled}
          onChange={(e) => this.props.changeName(e.target.value)}
          required
        />
        <Grid container spacing={3} style={{ marginTop: 20 }}>
          <Grid item xs={12} sm={4} >
            <TextField label="Brand"
              value={this.props.item.itemBrand} variant="outlined" fullWidth InputLabelProps={{
                shrink: true,
              }}

              disabled={this.props.disabled}
              onChange={(e) => this.props.changeBrand(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} >
            <TextField label="Model"
              value={this.props.item.itemModel} variant="outlined" fullWidth InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => this.props.changeModel(e.target.value)}
              disabled={this.props.disabled}
            />
          </Grid>
          <Grid item xs={12} sm={4} >
            <FormControl variant="outlined" fullWidth >
              <InputLabel id="demo-simple-select-helper-label" shrink={true}>Category</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={parseInt(this.props.item.itemCategoryId)}
                disabled={this.props.disabled}
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={(e) => this.props.changeCategoryId(e.target.value)}
              >
                {ItemCategory().map((item) => {
                  return <MenuItem value={item.id}>{item.label}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>

        </Grid>

        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={this.props.item.itemDescription}
          style={{ marginTop: 20 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => this.props.changeDescription(e.target.value)}
          disabled={this.props.disabled}
        />
        <FormControl variant="outlined" fullWidth style={{ marginTop: 20 }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.item.changeStatus}
            defaultValue={this.props.item.itemStatusId}
            onChange={(e) => this.props.changeStatusId(e.target.value)}
            disabled={this.props.disabled}
          >
            {ItemStatusLabel.map(item => {
              return <MenuItem value={item.id}>{item.label}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Grid container>
          {
            this.props.admin ?
              <Grid item xs={12} sm={6} style={{ marginTop: 20 }}>
                <DepartmentForm changeDepartmentId={this.props.changeDepartmentId} departmentId={this.props.item.departmentId} />
              </Grid>
              : null}
          <Grid item xs={12} sm={4} style={{ marginTop: 20 }}>
            <TextField label={this.props.admin ? "Amount" : "Add Amount"}
              type="number"
              value={this.props.item.amount} variant="outlined" fullWidth
              InputLabelProps={{
                shrink: true,
                inputProps: { min: 1 }
              }}
              InputProps={{ inputProps: { min: 1 } }}
              onChange={(e) => this.props.changeAmount(e.target.value)}
              disabled={this.props.disabled}
              helperText={this.props.admin ? "" : "* This number will add the total amount of this item"}
            />
          </Grid>
        </Grid>

        <FormControlLabel
          style={{ marginTop: 10 }}
          control={
            <Checkbox
              checked={ItemBorrowableToBoolean(this.props.item.itemBorrowable)}
              onChange={(e) => {
                this.props.changeBorrowable(BooleanToItemBorrowable(e.target.checked))
              }}
              name="checkedB"
              color="primary"
              disabled={this.props.disabled}
            />
          }
          label="Borrowable"
        />
        <Button type="submit" disabled={this.props.disabled} color="primary" variant="contained">Submit</Button>
      </form>
    )
  }
}

export default EditItem