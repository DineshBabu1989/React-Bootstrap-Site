import React, { Component } from "react";
import AboutJumbotron from "../components/About-Us/AboutJumbotron/AboutJumbotron";
import AboutScroller from "../components/About-Us/AboutScroller/AboutScroller";
import AboutMain from "../components/About-Us/AboutMain/AboutMain";
import Footer from "../components/Footer/Footer";
class About extends Component {
  render() {
    return (
      <div>
        <AboutJumbotron />
        <AboutScroller />
        <AboutMain />
        <Footer />
      </div>
    );
  }
}
export default About;
