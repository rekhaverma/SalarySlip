// This is the input data
let input = {
    annualSalary:60050,
    superRate:9,
    payPeriod:12,
    fixedAmount: 3572,
    rateOfInterest:0.325,
    amtWithoutTax:37000
}
// This is the required output.
let output = {
    grossIncome: 5004,
    incomeTax: 922,
    netIncome:4082,
    superAmount:450
}
describe("calculateSalarySlip", function () {
    it("It returns Gross Income", function(done) {
      // Calculated Gross Income
      let grossIncome = Math.round(input.annualSalary / 12);
      expect(grossIncome).toBe(output.grossIncome);

      // Calculated tax amount
      let taxAmount = Math.round((input.fixedAmount + (input.annualSalary - input.amtWithoutTax) * input.rateOfInterest) /input.payPeriod);
      expect(taxAmount).toBe(output.incomeTax);

      // Calculated Super Amount
      let superAmt = Math.round(grossIncome * (input.superRate * 0.01));
      expect(superAmt).toBe(output.superAmount);

      // Calculated NetIncome
      let netIncome = Math.round(grossIncome - taxAmount);
      expect(netIncome).toBe(output.netIncome);
      done();
    });
});