import React, { Component } from 'react'
import { Carousel, Grid, Row, Col, Glyphicon,Images,Modal,Button} from 'react-bootstrap';
import ModalItem from './Modal';
import "./tech.css";

class Tech extends Component{
 constructor(props) {
    super(props);
    this.state = {
        details: [
          {
          id: 0,
          heading: "React.js",
          image:"react",
          imageLarge:"reactLarge",
          text: "Front end JavaScript library based on virtual DOM",
          content: "React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it"  
          }, 
          {
          id: 1,
          heading: "Redux.js",
          image:"redux",
          text: "State management tool for react applications"
          },
          {
          id: 2,
          heading: "Angular.js",
          image:"angular",
          text: "Front end frame work based on the popular MVC"
          },
          {
          id: 3,
          heading: "Node.js",
          image:"node",
          text: "Server side frame work for handling javascript"
          },
          {
          id: 4,
          heading: "VUE.js",
          image:"vue",
          text: "A hybrid frame work with capabilities of MVC & FLUX"
          },
          {
          id: 5,
          heading: "Cordova",
          image:"cordova",
          text: "A hybrid mobile application development platform for Androis and IOS"
          },   
          {
          id: 6,
          heading: "Rails",
          image:"rails",
          text: "A Backend frame work for Web Applications",
              
          }, 
          {
          id: 7,
          heading: "Mongo",
          image:"mongo",
          text: "A JSON based NoSql data base for backend"
          },
          {
          id: 8,
          heading: "MySql",
          image:"mysql",
          text: "A relational database for maintaing web applications"
          },
          {
          id: 9,
          heading: "Bootstrap",
          image:"bootstrap",
          text: "It is front end framwork based for designing responsive web apps"
          },
          {
          id: 10,
          heading: "Jenkins",
          image:"jenkins",
          text: "A continous integration platform for developing web apps basedon agile methodology"
          },
          {
          id: 11,
          heading: "Git",
          image:"git",
          text: "A version control system for building software in a collabrative manner"
          }
          ],
       show: false,
       active: 1
    }
       this.handleClose = this.handleClose.bind(this);
       this.handleClick = this.handleClick.bind(this);
       this.renderList =  this.renderList.bind(this);
  }

handleClose() {
    this.setState({ show: false });
  }   
handleClick (id) { 
    this.setState({ active: id});
    this.setState({ show: true});
}    
/* individual list item */
renderList(details,id){
    return(
        <div className ="list-pic col-xs-6 col-md-4 col-lg-2" key={details.id}
        onClick={() => this.handleClick(details.id)}>
        <div className = "list-pic-innerBlock" >
        <img src={require('../images/'+details.image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text">
        <h2>{details.heading}</h2>                   
        <p>{details.text}</p>
        </div>
        </div>
        </div>      
        </div>);
}   
render(){
return(
  <div>
      <div className = "techContainer container">
      {/* Top Heading */}
      <div className ="row">
      <div className = "col-xs-12 col-md-12">
      <div className = 'techHeading col-md-12'>
      <h1>Technological Expertize</h1>
      </div>
      </div>
      </div>
      
      {/* technology item  list grid */} 
      
      <div className ="row">       
      {this.state.details.map(this.renderList)}
      </div> 
          
      <ModalItem 
      open  =  {this.state.show} 
      close =  {this.handleClose}
      title =  {this.state.details[this.state.active].heading}
      content ={this.state.details[this.state.active].content}
      banner = {this.state.details[this.state.active].image}
          />
          
     </div>
     </div>

); 
}

}
export default Tech;
  

