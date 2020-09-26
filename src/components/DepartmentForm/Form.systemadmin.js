import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
class Form extends React.Component {
  state = {
    showPassword: false
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.sendData()
  }
  render() {
    const { userId, firstName, lastName, password, departmentName, departmentTelNo, departmentEmail, placeBuilding, placeFloor, placeRoom } = this.props.data.form
    const { setId, setName, setSurname, setPassword, setDepartmentName, setDepartmentTel, setDepartmentEmail, setDepartmentBuilding, setDepartmentFloor, setDepartmentRoom } = this.props.data
    return (
      <Paper style={{ padding: '10px 20px' }}>
        <h2>User Information</h2>
        <form onSubmit={this.onSubmit} autocomplete="off" style={{ marginTop: 20 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="First Name"
                variant="outlined"
                fullWidth
                required
                value={firstName}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                value={lastName}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="User Id"
                variant="outlined"
                fullWidth
                required
                value={userId}
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  labelWidth={70}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <h2 style={{ marginTop: 20 }}>Department Information</h2>
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Department Name"
                required
                variant="outlined"
                fullWidth
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Telephone No"
                variant="outlined"
                fullWidth
                required
                value={departmentTelNo}
                onChange={(e) => setDepartmentTel(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={departmentEmail}
                onChange={(e) => setDepartmentEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Building"
                variant="outlined"
                fullWidth
                required
                value={placeBuilding}
                onChange={(e) => setDepartmentBuilding(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Floor"
                variant="outlined"
                fullWidth
                required
                type="number"
                min="0"
                value={placeFloor}
                onChange={(e) => setDepartmentFloor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Room"
                variant="outlined"
                fullWidth
                required
                value={placeRoom}
                onChange={(e) => setDepartmentRoom(e.target.value)}
              />
            </Grid>
          </Grid>
          <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
            <Button variant="contained" color="primary" type="submit">
              <AddIcon /> Add
          </Button>
          </div>
        </form>
      </Paper >
    )
  }
}

export default Form