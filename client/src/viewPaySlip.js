import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router";
class PaySlipView extends Component {
  componentWillMount() {
    console.log("componentWillMount----------->", this);
    let salaryData = localStorage.getItem("pageData");
    if (salaryData) {
      this.setState({
        salaryData: JSON.parse(salaryData)
      });
    }
    // removing the data from localStorage.  Since if user clicks for another invoice it overrides this data
    localStorage.removeItem("pageData");
  }

  render() {
    console.log("PaySlipView----------->", this);
    if (
      this.state &&
      this.state.salaryData &&
      this.state.salaryData.salarySlip
    ) {
      const { salarySlip } = this.state.salaryData;
      console.log("this.state.salaryData", salarySlip);
      return (
        <div className="">
          <table style={{ width: "100%" }} id="SalarySlip">
            <tr>
              <th>name</th>
              <th>pay-period</th>
              <th>gross-income</th>
              <th>income-tax</th>
              <th>net-income</th>
              <th>super-amount</th>
            </tr>
            <tr>
              <td>{salarySlip.Name}</td>
              <td>{salarySlip.payPeriod}</td>
              <td>{salarySlip.grossIncome}</td>
              <td>{salarySlip.taxAmount}</td>
              <td>{salarySlip.netIncome}</td>
              <td>{salarySlip.superIncome}</td>
            </tr>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          Nothing found here... Please go to <Link to="/">Home</Link>
        </div>
      );
    }
  }
}

export default PaySlipView;
