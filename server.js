var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var port = process.env.PORT || 8080;
// allow cross origin
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "client/public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});
require("./routes/index")(app);

app.listen(port);
console.log("Server running on port " + port);
exports = module.exports = app;
