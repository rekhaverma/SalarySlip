import React, { Component } from "react";
import "./App.css";
import Home from "./home.js";
import PaySlipView from "./viewPaySlip.js";
import { Router, Route, browserHistory } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route name="homepage" path="/" component={Home} />
          <Route
            name="viewPaySlip"
            path="/viewPaySlip"
            component={PaySlipView}
          />
        </Router>
      </div>
    );
  }
}

export default App;
