import * as _ from 'lodash'
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
const DarkerDisabledTextField = withStyles({
  root: {
    marginRight: 8,
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.8)" // (default alpha is 0.38)
    }
  }
})(TextField);
class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foo: '', controlled: '' }
  }


  updateFoo = _.debounce((value) => { // this can also dispatch a redux action
    this.props.setText(value)
    this.setState({ foo: value });
  }, 300);

  handleInputChange = (e) => {
    const value = e.target.value;

    this.setState({
      controlled: value
    });

    this.updateFoo(value);
  }
  render() {
    const { label, placeholder, value, rows, disabled } = this.props
    return (
      <DarkerDisabledTextField
        id="outlined"
        label={label}
        placeholder={placeholder}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
        value={this.state.controlled === '' ? value : this.state.controlled}
        onChange={this.handleInputChange}
        required
        rows={rows}
        multiline
        disabled={disabled}
      />
    )
  }
}

export default TextArea