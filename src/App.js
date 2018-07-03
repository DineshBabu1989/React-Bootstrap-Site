import React, { Component } from "react";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
