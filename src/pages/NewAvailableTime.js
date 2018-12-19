import React, { Component, Fragment } from 'react'
import FormAlert from '../components/FormAlert'
import Select from '../components/Select'
import { buildArray, formatDateToDefault } from '../libs/utils'
import { newAvailableDate } from '../requests';

class NewAvailableTime extends Component {
  constructor() {
    super()
    this.state = {
      formSent: false,
      message: '',
      success: false,
      day: '',
      month: '',
      year: '',
      hour: '',
      minute: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit(event, errors) {
    event.preventDefault()
    if (errors) {
      this.setState({
        formSent: true,
      })
      return
    }
    const bodyRequest ={
      date: formatDateToDefault(this.state)
    } 
    console.log(bodyRequest)
    newAvailableDate(bodyRequest, (error) => {
      this.setState({
        formSent: true,
        message: error ? "Failed to send new date" : "Created successfully!",
        success: error ? false : true,
      })
    })
    return
  }


  onChange (e) {
      const name = e.target.id
      console.log(e.target.id)
      this.setState({
          [name]: e.target.value,
      })
  }

  render() {
    const days = buildArray(31)
    const months = buildArray(12)
    const years = buildArray(2021, 2018)
    const hours = buildArray(23, 0)
    const minutes = buildArray(59, 0)
    return (
      <Fragment>
        { this.state.formSent && (
          <FormAlert
            success={this.state.success}
            message={this.state.message}
          />
        )}
        <form id="dateform" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <Select
              labelName="Day"
              selectId="day"
              formId="dateform"
              selectName="days"
              values={days}
              onChange={this.onChange}
          />
          <Select
              labelName="Month"
              selectId="month"
              formId="dateform"
              selectName="months"
              values={months}
              onChange={this.onChange}
          />
          <Select
              labelName="Year"
              selectId="year"
              formId="dateform"
              selectName="years"
              values={years}
              onChange={this.onChange}
          />
        </div>
        <div className="form-row">
          <Select
              labelName="Hour"
              selectId="hour"
              formId="dateform"
              selectName="hours"
              values={hours}
              onChange={this.onChange}
          />
          <Select
              labelName="Minute"
              selectId="minute"
              formId="dateform"
              selectName="minutes"
              values={minutes}
              onChange={this.onChange}
          />
        </div>
          <input type="submit" className="btn btn-success" value="Submit" />
      </form>
      </Fragment>
    );
  }
}

export default NewAvailableTime
