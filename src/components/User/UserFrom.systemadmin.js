import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Role } from '../../systemdata/Role'

class Form extends React.Component {
  state = {
    showPassword: false
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.sendData()
  }
  render() {
    let { userId, firstName, lastName, password, email, telNo, role } = this.props.data
    let { setuserId, setfirstName, setlastName, setEmail, setpassword, settelNo, setRole } = this.props
    return (
      <Paper style={{ padding: '10px 20px', marginTop: 20 }}>
        <h2>User Information</h2>
        <form onSubmit={this.onSubmit} autocomplete="off" style={{ marginTop: 20 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="User ID"
                variant="outlined"
                fullWidth
                required
                value={userId}
                onChange={(e) => setuserId(e.target.value)}
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
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="First Name"
                variant="outlined"
                fullWidth
                required
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
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
                onChange={(e) => setlastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /></Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-helperText"
                label="Telephone No."
                variant="outlined"
                fullWidth
                required
                value={telNo}
                onChange={(e) => settelNo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {Role.map(item => {
                    return <MenuItem value={item.id}>{item.label}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
            <Button variant="contained" color="primary" type="submit">
              <AddIcon /> Add
          </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default Form