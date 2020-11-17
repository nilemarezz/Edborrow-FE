import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { RefactorDateJS } from '../../utilities/data/RefactorDateJS'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class DateInputRange extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    this.props.setFormDate({ from, itemId: this.props.itemId })
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }

  handleToChange(to) {
    this.props.setToDate({ to, itemId: this.props.itemId })
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { from, to } = this.state;
    const unavaliableData = []

    this.props.disabledDate.map(date => {
      const yesterday = new Date(date.borrowDate)
      yesterday.setDate(yesterday.getDate() - 1)
      const tomorrow = new Date(date.returnDate)
      tomorrow.setDate(tomorrow.getDate() + 1)
      unavaliableData.push({ after: new Date(yesterday), before: new Date(tomorrow) })
    })
    return (
      <div className="InputFromTo" style={{ zIndex: 9999 }}>
        <DayPickerInput
          value={this.props.from}
          placeholder="From"
          format="LL"
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            toMonth: to,
            modifiers: {
              disabled: [{ before: new Date(), after: to }]
            },
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            inputProps={{ disabled: this.state.from ? false : true }}
            ref={el => (this.to = el)}
            value={this.props.to}
            placeholder="To"
            format="LL"

            dayPickerProps={{
              selectedDays: [from, { from, to }],
              modifiers: {
                disabled: [
                  { before: from }, { before: new Date() },
                  { after: new Date(new Date(this.state.from).getTime() + (10 * 24 * 60 * 60 * 1000)) },
                ]
              },
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        <Helmet>
          <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}