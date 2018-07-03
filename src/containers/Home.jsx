import React, { Component } from "react";
import JumbotronFront from "../components/Jumbotron/Jumbotron";
import Intro from "../components/Intro/Intro";
import Service from "../components/Service/Service";
import Subscribe from "../components/Subscribe/Subscribe";
import ServiceEmbedded from "../components/Service/ServiceEmbedded";
import Tech from "../components/Technologies/Tech";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Footer/Footer";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <JumbotronFront />
        <Intro />
        <Service />
        <Subscribe />
        <ServiceEmbedded />
        <Tech />
        <Clients />
        <Footer />
      </div>
    );
  }
}
export default Home;
