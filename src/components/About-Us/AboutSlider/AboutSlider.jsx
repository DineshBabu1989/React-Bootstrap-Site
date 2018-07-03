import React from "react";
import { Carousel, Row, Col, Image, Button } from "react-bootstrap";
import "./AboutSlider.css";
const AboutSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slider-item">
          <Carousel.Caption>
            <h3 className="testimonial-heading">Niagra Automation</h3>
            <p className="testimonial-content">
              The IoT Drip Monitoring System and Web Console has Come up very
              well.The app is up and running with out issues
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-item">
          <Carousel.Caption>
            <h3 className="testimonial-heading">Second slide label</h3>
            <p className="testimonial-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-item">
          <Carousel.Caption>
            <h3 className="testimonial-heading">Third slide label</h3>
            <p className="testimonial-content">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default AboutSlider;
