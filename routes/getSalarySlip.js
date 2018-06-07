var express = require("express"),
  router = express.Router();

// My modules
var taxPayment = require("../config/taxPaymentObj");
var calculationModule = require("../util/methods");

router.post("/getSalarySlip", function(req, res, next) {
  next();
});
// a middleware function with no mount path. This code is executed for every request to the router
router.use(function(req, res, next) {
  res.locals.Name = req.body.firstName + " " + req.body.lastName;
  res.locals.payPeriod = req.body.payStartDate;
  var annualSalary = req.body.annualSalary;
  res.locals.grossIncome = calculationModule.calculateGrossIncome(annualSalary);
  return next();
});

// Middleware to calculate super income.
router.use(function(req, res, next) {
  var superRate = req.body.superRate;
  res.locals.superIncome = calculationModule.calculateSuperIncome(
    res.locals.grossIncome,
    superRate
  );
  return next();
});

// Middleware to calculate income tax.
router.use(function(req, res, next) {
  var annualSalary = req.body.annualSalary;
  var taxObject = taxPayment[calculationModule.getTaxObj(annualSalary)];
  res.locals.taxAmount = calculationModule.calculateIncomeTax(
    annualSalary,
    taxObject
  );
  return next();
});

// Middleware to calculate net income.
router.use(function(req, res, next) {
  res.locals.netIncome = calculationModule.calculateNetIncome(
    res.locals.grossIncome,
    res.locals.taxAmount
  );
  return next();
});

// Middleware returning salary slip json.
router.use(function(req, res) {
  return res.json({ salarySlip: res.locals });
});

module.exports = router;
