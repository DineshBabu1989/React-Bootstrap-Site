import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-style">
        <div className="container-fluid">
          {/*footer headline*/}
          <div className="social row">
            <div className=" container">
              <div className=" social-links-col-msg col-sm-12 col-md-6">
                <p className="footer-welcome">
                  Get Connected with us on social network !
                </p>{" "}
              </div>
              <div className="social-links-col-links col-sm-12 col-md-6 text-center">
                <ul>
                  <li>
                    <i className="social-icons fa fa-facebook-official" />
                  </li>
                  <li>
                    <i className="social-icons fa fa-google-plus-square" />
                  </li>
                  <li>
                    <i className="social-icons fa fa-twitter-square" />
                  </li>
                  <li>
                    <i className="social-icons fa fa-linkedin-square" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*footer main area*/}
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="footer-column col-sm-12 col-md-3">
                  <h3 className="footer-column-title">
                    <strong>GEM Enterprises</strong>
                  </h3>
                  <hr className="underLine" />
                  <p className="about-text">
                    We are a committed team of developers, designers, and
                    programmers. Our areas of expertize spans across a spectrum
                    of domains from web development, Hybrid mobile application
                    development, IoT, and embedded systems.
                  </p>
                </div>
                <div className="footer-column col-sm-12 col-md-3">
                  <h3 className="footer-column-title">
                    <strong>Products</strong>
                  </h3>
                  <hr className="underLine" />
                  <p>
                    {" "}
                    <a href="#!">Web </a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">E-Commerce</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">Mobile </a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">Embedded</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">IoT</a>
                  </p>
                </div>
                <div className="footer-column col-sm-12 col-md-3">
                  <h3 className="footer-column-title">
                    <strong>Usefull Links </strong>
                  </h3>
                  <hr className="underLine" />
                  <p>
                    {" "}
                    <a href="#!">About Us</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">Services</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">Products</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">Training</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#!">Technology</a>
                  </p>
                </div>
                <div className="footer-column col-sm-12 col-md-3">
                  <h3 className="footer-column-title">
                    <strong>Contact</strong>
                  </h3>
                  <hr className="underLine" />
                  <p>
                    <i className="fa fa-home fa-fw" aria-hidden="true" />
                    33D,Anbu nagar,5th Street,
                  </p>
                  <p className="address">Vadavalli road,Edayarpalayam,</p>
                  <p className="address">Coimbatore-25.</p>
                  <p>
                    <i className="fa fa-envelope fa-fw" aria-hidden="true" />info@gementerprises.com
                  </p>
                  <p>
                    <i className="fa fa-phone fa-fw" aria-hidden="true" />+91-9790685775
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*footer bottom*/}
          <div className="row">
            <div className="footer-bottom text-center-fluid">
              © 2018 Copyright:
              <a href="#">
                <strong> GEM Enterprises</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
