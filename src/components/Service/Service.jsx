import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Service.css";
class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleColumn: {
        title: "Software Services",
        content:
          " We spealize in designing fully responsive web applications using modern day framworks.We are a leading service provider in the digital domain, an organization that aspires to drive digital transformation. With our expertise ranging from custom product development, enterprise mobility, UI/UX design, digital marketing, and e-commerce, to technologies such as AI, AR, VR, RPA, and more, we emerge as the one-stop destination for the entire IT needs of businesses. We provide futuristic digital transformation services that enable businesses to keep pace with the emerging trends."
      },
      listDetails: [
        {
          id: 0,
          heading: "Web Development",
          image: "fa fa-desktop",
          text:
            "We provide premium fully responsive web application development using advanced frameworks and libraries. "
        },
        {
          id: 1,
          heading: "Hybrid Mobile Apps ",
          image: "fa fa-mobile",
          text:
            "We are experts in developing hybrid mobile applications which combine the best of HTML5,Java Script with Native platforms"
        },
        {
          id: 2,
          heading: "E-Commerce ",
          image: "fa fa-shopping-cart",
          text:
            "We tailor make e-commerce apps with the primary idea of converting  visitors in to customers"
        },
        {
          id: 3,
          heading: "AWS CMS",
          image: "fa fa-amazon",
          text:
            "We develop dynamic websites with AWS powered content management system, where you hold the power over your content."
        },
        {
          id: 4,
          heading: "SEO",
          image: "fa fa-search-plus",
          text:
            "We make sure your web or mobile applications rank higher in search engines through strategic submissions and optimizations"
        },
        {
          id: 5,
          heading: "Hosting-Maintaince",
          image: "fa fa-server",
          text:
            "We take care of keeping your app live on the internet, fixing issues and making sure it functions seamlessly."
        }
      ]
    };
  }

  renderList(details, id) {
    return (
      <div className="item-holder col-xs-12 col-md-6">
        <div className="item">
          <div className="item-icon col-xs-4 col-md-4">
            <i className={details.image} />
          </div>
          <div className="item-text col-xs-8 col-md-8">
            <p className="item-text-title">{details.heading}</p>
            <p>{details.text}</p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <div className="service">
          <div className="container">
            <div className="col-xs-12 col-md-4">
              <div className="title-row ">{this.state.titleColumn.title}</div>
              <div className="title-row-content ">
                {this.state.titleColumn.content}
              </div>
            </div>
            <div className=" col-xs-12 col-md-8">
              <div className="row">
                {this.state.listDetails.map(this.renderList)}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
export default Service;
