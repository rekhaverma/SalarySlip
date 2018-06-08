import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";
import PaySlipView from "./viewPaySlip";
import { post } from "./api.js";

class Home extends Component {
  state = {
    salaryData: {}
  };
  onSubmit = event => {
    event.preventDefault();
    let payload = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      annualSalary: this.annualSalary.value,
      superRate: this.superRate.value,
      payStartDate: this.payStartDate.value
    };
    post("/getSalarySlip", payload).then(res => {
      this.setState({
        salaryData: res && res.salarySlip
      });
    });
  };
  render() {
    const { salaryData } = this.state;
    return (
      <div className="">
        <form onSubmit={this.onSubmit}>
          <h1>Salary Generator</h1>
          <fieldset>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              ref={ref => (this.firstName = ref)}
              name="firstName"
              required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              ref={ref => (this.lastName = ref)}
              id="lastName"
              name="lastName"
              required
            />

            <label htmlFor="annualSalary">Annual Salary:</label>
            <input
              type="number"
              ref={ref => (this.annualSalary = ref)}
              id="annualSalary"
              name="annualSalary"
              required
            />
            <label htmlFor="superRate">Super rate:</label>
            <input
              type="number"
              ref={ref => (this.superRate = ref)}
              id="superRate"
              name="superRate"
              required
            />
            <label htmlFor="password">Pay start date:</label>
            <input
              type="date"
              ref={ref => (this.payStartDate = ref)}
              id="payStartDate"
              name="payStartDate"
              required
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        {salaryData &&
          !isEmpty(salaryData) && <PaySlipView salaryData={salaryData} />}
      </div>
    );
  }
}

export default Home;
