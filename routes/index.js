module.exports = function(app) {
  app.use("/", require("./getSalarySlip"));
};
