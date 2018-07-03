import React, { Component } from "react";
import { Carousel, Grid, Row, Col, Image, Button } from "react-bootstrap";
import Card from "../../Card/Card";
import AboutSlider from "../AboutSlider/AboutSlider";
import "./AboutMain.css";
class AboutMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about-main">
        <div className="container">
          <div className="title-row">About Us</div>
          <div className="row">
            <p className="row-content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="title-row">Testimonial</div>
          <div className="row">
            <AboutSlider />
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMain;
