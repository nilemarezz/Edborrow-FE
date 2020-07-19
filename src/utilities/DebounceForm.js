import * as _ from 'lodash'
import React from 'react'
import TextField from '@material-ui/core/TextField';
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
		const { label, placeholder, value, rows } = this.props
		return (
			<TextField
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
			/>
		)
	}
}

export default TextArea