import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { withStyles } from "@material-ui/core/styles";
import { renderCategory } from '../../utilities/data/getCategory'
import { RefactorDate } from '../../utilities/data/refactorDate'

const StyledTextField = withStyles({
  root: {
    margin: '0px 8px',
    "& .MuiInputBase-root.Mui-disabled": {
      color: "black" // (default alpha is 0.38)
    }
  }
})(TextField);
class ItemDetailAccordion extends React.Component {
  render() {
    const { itemBrand, itemModel, categoryId, itemDescription, createDate } = this.props.item
    console.log(this.props.item)
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            id="standard-full-width"
            label="Brand"
            value={itemBrand || "-"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            id="standard-full-width"
            label="Model"
            value={itemModel || "-"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            id="standard-full-width"
            label="Type"
            value={renderCategory(categoryId) || "-"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            id="outlined-multiline-static"
            label="Buy Date"
            multiline
            value={createDate ? RefactorDate(createDate) : "-"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <StyledTextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={itemDescription || "-"}
            variant="outlined"
            disabled
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    )
  }
}

export default ItemDetailAccordion