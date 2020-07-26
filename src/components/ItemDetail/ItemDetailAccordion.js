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
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            id="standard-full-width"
            label="Brand"
            value={"Asus"}
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
            value={"KF-4521"}
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
            value={"Electronic"}
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
            value="09/01/2020"
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
            value="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football. "
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