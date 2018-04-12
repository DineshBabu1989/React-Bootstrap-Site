import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import 'font-awesome/css/font-awesome.min.css';
import './Service.css';
class ServiceEmbedded extends Component {


   constructor(props) {
    super(props);
    this.state = {
        titleColumn:{ title: "Embedded & IoT Services",
                     content :" We offer a wide range of embedded and IoT solutions.We develop customized solutions based on client needs which differ in performance, functionality, and cost.We work on all leading microcontrollers of various vendors which include Renanses, Texas Instruments, PIC, Atmel, Espress if, and Infineon.We have a team of experienced developers with wide experience on all communication protocols which includes CAN, LIN, USART, MOST, I2C, and SPI.Some of our specializations in embedded are listed herewith."},
        listDetails: [
          {
          id: 0,
          heading: "Embedded System",
          image:"fa fa-microchip",
          text: "We specialize in developing Microcontroller based automation systems for industrial needs. ",
          },
          {
          id: 1,
          heading: "IoT Automation ",
          image:"fa fa-cloud",
          text: "We are experts in developing Custom IoT based data acquisition, control, and monitoring systems.",
          },
          {
          id: 2,
          heading: "GPS Tracking",
          image:"fa fa-map",
          text: "We tailor make GPS navigation systems with vehicular parameter monitoring using high-end embedded, web technologies.",
          },
          {
          id: 3,
          heading: "PLC Automation",
          image:"fa fa-cogs",
          text: "We develop hi-end industrial control and automation systems using PLC and HMI.",
          },
          {
          id: 4,
          heading: "R & D",
          image:"fa fa-lightbulb-o",
          text: "We collabrate with institutions and research centres to develop your develop your ideas in to products",
          },
          {
          id: 5,
          heading: "Training Services",
          image:"fa fa-certificate",
          text: "We offer industrial training on various tools, domains for college students and entry-level engineers",
          }  
        
        ]
    }    
   }

renderList(details,id){
    return(      
                
                <div className ="item-holder col-xs-12 col-md-6">  
                <div className ="item"> 
                <div className ="item-icon col-xs-4 col-md-4">
                <i className={details.image}></i>
                </div> 
                <div className ="item-text col-xs-8 col-md-8">
                <p className = "item-text-title">{details.heading}</p>
                <p>{details.text}</p>
                </div>
                </div>  
                </div>  
                  
    );
}
render(){
    return(
    <ScrollAnimation animateIn="fadeIn">
    <div className = "service">
    <div className = "container">
        <div className = "col-xs-12 col-md-4">
            <div className = "title-row ">{this.state.titleColumn.title}</div>
            <div className = "title-row-content ">{this.state.titleColumn.content}</div>
        </div>
    <div className =" col-xs-12 col-md-8">
          <div className ="row">
            {this.state.listDetails.map(this.renderList)} 
          </div>
    </div>
    </div>
    </div>
    </ScrollAnimation>
    );
}
    
}
export default ServiceEmbedded;
