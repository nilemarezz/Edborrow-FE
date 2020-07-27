import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { withStyles } from "@material-ui/core/styles";

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
    const { itemBrand, itemModel, itemType, itemdescription, BuyDate } = this.props.item
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
            value={itemType || "-"}
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
            value={BuyDate || "-"}
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
            value={itemdescription || "-"}
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