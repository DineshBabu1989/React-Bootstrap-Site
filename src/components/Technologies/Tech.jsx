import React, { Component } from "react";
import {
  Carousel,
  Grid,
  Row,
  Col,
  Glyphicon,
  Image,
  Modal,
  Button
} from "react-bootstrap";
import ModalItem from "../Modal/Modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Tech.css";

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          id: 0,
          heading: "React.js",
          image: "react",
          imageLarge: "reactLarge",
          text: "Front end JavaScript library based on virtual DOM",
          content:
            "React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it"
        },
        {
          id: 1,
          heading: "Redux.js",
          imageLarge: "reduxLarge",
          image: "redux",
          text: "State management tool for react applications",
          content:
            " Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently,run in different environments and easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.You can use Redux together with React, or with any other view library.It is tiny (2kB, including dependencies)."
        },
        {
          id: 2,
          heading: "Angular.js",
          image: "angular",
          imageLarge: "angularLarge",
          text: "Front end frame work based on the popular MVC",
          content:
            " AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.AngularJS is what HTML would have been, had it been designed for applications. HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in what do I have to do to trick the browser into doing what I want?"
        },
        {
          id: 3,
          heading: "Node.js",
          image: "node",
          imageLarge: "nodeLarge",
          text: "Server side frame work for handling javascript",
          content:
            "As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following hello world example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done, Node will sleep.This is in contrast to today's more common concurrency model where OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node are free from worries of dead-locking the process, since there are no locks. Almost no function in Node directly performs I/O, so the process never blocks. Because nothing blocks, scalable systems are very reasonable to develop in Node."
        },
        {
          id: 4,
          heading: "VUE.js",
          image: "vue",
          imageLarge: "vueLarge",
          text: "A hybrid frame work with capabilities of MVC & FLUX",
          content:
            "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."
        },
        {
          id: 5,
          heading: "Cordova",
          image: "cordova",
          imageLarge: "cordovaLarge",
          text:
            "A hybrid mobile application development platform for Androis and IOS",
          content:
            "Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc."
        },
        {
          id: 6,
          heading: "Rails",
          image: "rails",
          imageLarge: "railsLarge",
          text: "A Backend frame work for Web Applications",
          content:
            "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern."
        },
        {
          id: 7,
          heading: "Mongo",
          image: "mongo",
          imageLarge: "mongoLarge",
          text: "A JSON based NoSql data base for backend",
          content:
            "MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose."
        },
        {
          id: 8,
          heading: "MySql",
          image: "mysql",
          imageLarge: "mysqlLarge",
          text: "A relational database for maintaing web applications",
          content:
            "MySQL is the most popular Open Source Relational SQL Database Management System. MySQL is one of the best RDBMS being used for developing various web-based software applications. MySQL is developed, marketed and supported by MySQL AB, which is a Swedish company. This tutorial will give you a quick start to MySQL and make you comfortable with MySQL programming."
        },
        {
          id: 9,
          heading: "Bootstrap",
          image: "bootstrap",
          imageLarge: "bootstrapLarge",
          text:
            "It is front end framwork based for designing responsive web apps",
          content:
            "Scaffolding − Bootstrap provides a basic structure with Grid System, link styles, and background. This is is covered in detail in the section Bootstrap Basic Structure.CSS − Bootstrap comes with the feature of global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system. This is covered in detail in the section Bootstrap with CSS.Components − Bootstrap contains over a dozen reusable components built to provide iconography, dropdowns, navigation, alerts, pop-overs, and much more. This is covered in detail in the section Layout Components.JavaScript Plugins − Bootstrap contains over a dozen custom jQuery plugins. You can easily include them all, or one by one. This is covered in details in the section Bootstrap Plugins.Customize − You can customize Bootstrap's components, LESS variables, and jQuery plugins to get your very own version."
        },
        {
          id: 10,
          heading: "Jenkins",
          image: "jenkins",
          imageLarge: "jenkinsLarge",
          text:
            "A continous integration platform for developing web apps basedon agile methodology",
          content:
            "Continuous Integration is a development practice that requires developers to integrate code into a shared repository at regular intervals. This concept was meant to remove the problem of finding later occurrence of issues in the build lifecycle. Continuous integration requires the developers to have frequent builds. The common practice is that whenever a code commit occurs, a build should be triggered."
        },
        {
          id: 11,
          heading: "Git",
          image: "git",
          imageLarge: "gitLarge",
          text:
            "A version control system for building software in a collabrative manner",
          content:
            "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. As a distributed revision control system it is aimed at speed,data integrity, and support for distributed, non-linear workflows.Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Its current maintainer since 2005 is Junio Hamano.As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version tracking abilities, independent of network access or a central server.Git is free and open source software distributed under the terms of the GNU General Public License version 2."
        }
      ],
      show: false,
      active: 1
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleClick(id) {
    this.setState({ active: id });
    this.setState({ show: true });
  }
  /* individual list item */
  renderList(details, id) {
    return (
      <div
        className="list-pic col-xs-6 col-md-4 col-lg-2"
        key={details.id}
        onClick={() => this.handleClick(details.id)}
      >
        <div className="list-pic-innerBlock">
          <img
            src={require("../../images/" + details.image + ".png")}
            alt=""
            responsive
          />
          <div class="overlay">
            <div class="text">
              <h2>{details.heading}</h2>
              <p>{details.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="techContainer container">
          <ScrollAnimation animateIn="fadeIn">
            {/* Top Heading */}
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="techHeading col-md-12">
                  <h2>
                    <strong>Technological Expertize </strong>
                  </h2>
                </div>
              </div>
            </div>

            {/* technology item  list grid */}

            <div className="row">{this.state.details.map(this.renderList)}</div>

            <ModalItem
              open={this.state.show}
              close={this.handleClose}
              title={this.state.details[this.state.active].heading}
              content={this.state.details[this.state.active].content}
              banner={this.state.details[this.state.active].imageLarge}
            />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
export default Tech;
