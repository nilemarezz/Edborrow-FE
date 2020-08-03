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
class UserDetailAccordian extends React.Component {
  render() {
    const { departmentName, departmentEmail, departmentTelNo, placeBuilding, placeFloor, placeRoom } = this.props.item
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            id="standard-full-width"
            label="Name"
            value={departmentName || "-"}
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
            label="Email"
            value={departmentEmail || "-"}
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
            label="Telephone No."
            value={departmentTelNo || "-"}
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
            label="Building"
            value={placeBuilding || "-"}
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
            label='Floor'
            value={placeFloor || "-"}
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
            label="Room"
            value={placeRoom || "-"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Grid>
      </Grid>
    )
  }
}

export default UserDetailAccordian