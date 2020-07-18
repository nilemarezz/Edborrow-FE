import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from "@material-ui/pickers";

class KeyboardDatePickerExample extends React.Component {
    render() {
        const { value, setTime } = this.props
        return (

            <KeyboardDatePicker
                clearable
                value={value}
                placeholder="10/10/2018"
                onChange={date => setTime(date)}
                minDate={new Date()}
                format="MM/dd/yyyy"
                variant="inline"
                inputVariant="outlined"
                label={this.props.label}
                fullWidth
                required
            />


        )
    }
}

export default KeyboardDatePickerExample;