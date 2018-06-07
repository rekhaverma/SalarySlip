var helpers = {};

module.exports = helpers;

// Get Tax object
helpers.getTaxObj = annualSalary => {
  if (annualSalary >= 0 && annualSalary <= 18200) {
    return "taxChunkOne";
  } else if (annualSalary >= 18201 && annualSalary <= 37000) {
    return "taxChunkTwo";
  } else if (annualSalary >= 37001 && annualSalary <= 87000) {
    return "taxChunkThree";
  } else if (annualSalary >= 87001 && annualSalary <= 180000) {
    return "taxChunkFour";
  } else if (annualSalary >= 180001) {
    return "taxChunkFive";
  }
};

helpers.calculateGrossIncome = annualSalary => {
  return Math.round(annualSalary / 12);
};

helpers.calculateSuperIncome = (grossSalary, superRate) => {
  return Math.round(grossSalary * (superRate * 0.01));
};

helpers.calculateIncomeTax = (annualSalary, taxJson) => {
  return Math.round(
    (taxJson["fixedTax"] +
      (annualSalary - taxJson["amtWithoutTax"]) * taxJson["interestRate"]) /
      12
  );
};

helpers.calculateNetIncome = (annualSalary, incomeTax) => {
  return Math.round(annualSalary - incomeTax);
};
