import React, { Component } from "react";

class PaySlipView extends Component {

  render() {
    const { salaryData } = this.props;
      return (
        <div>
          <h1>Salary Slip</h1>
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
              <td>{salaryData.Name}</td>
              <td>{salaryData.payPeriod}</td>
              <td>{salaryData.grossIncome}</td>
              <td>{salaryData.taxAmount}</td>
              <td>{salaryData.netIncome}</td>
              <td>{salaryData.superIncome}</td>
            </tr>
          </table>
        </div>
      );
  }
}

export default PaySlipView;
