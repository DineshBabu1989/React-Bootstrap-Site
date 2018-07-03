import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./AboutJumbotron.css";
const AboutJumbotron = () => {
  return (
    <Jumbotron>
      <p className="jumbotronTitle">
        We are a futuristic company with footprints on Web Development, Embedded
        and IoT{" "}
      </p>
      <p className="jumbotronText">
        We believe that team work with strategic planning and creativity can
        work wonders.We believe quality of work comes with creativity,dedication
        and iterative optimisation that only the most passionate tend to
        practice.We are passionate about what we do...
      </p>
      <p>
        <Button bsStyle="primary">LEARN MORE</Button>
      </p>
    </Jumbotron>
  );
};
export default AboutJumbotron;
