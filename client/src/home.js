import React, { Component } from "react";
import "./App.css";

class Home extends Component {
  onSubmit = event => {
    event.preventDefault();
    console.log("this----------->", this.firstName.value);
    fetch("http://localhost:8080/getSalarySlip", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        annualSalary: this.annualSalary.value,
        superRate: this.superRate.value,
        payStartDate: this.payStartDate.value
      })
    })
      .then(value => value.json())
      .then(res => {
        localStorage.setItem("pageData", JSON.stringify(res));
        const windowRef = window.open("viewPaySlip", "_blank");
        windowRef.focus();
        windowRef.onfocus = function() {
          return;
        };
      });
  };
  render() {
    return (
      <div className="">
        <form onSubmit={this.onSubmit}>
          <h1>Salary Generator</h1>
          <fieldset>
            <label for="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              ref={ref => (this.firstName = ref)}
              name="firstName"
              required
            />

            <label for="lastName">Last Name:</label>
            <input
              type="text"
              ref={ref => (this.lastName = ref)}
              id="lastName"
              name="lastName"
              required
            />

            <label for="annualSalary">Annual Salary:</label>
            <input
              type="number"
              ref={ref => (this.annualSalary = ref)}
              id="annualSalary"
              name="annualSalary"
              required
            />
            <label for="superRate">Super rate:</label>
            <input
              type="number"
              ref={ref => (this.superRate = ref)}
              id="superRate"
              name="superRate"
              required
            />
            <label for="password">Pay start date:</label>
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
      </div>
    );
  }
}

export default Home;
