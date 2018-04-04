import React, { Component } from 'react'
import { Carousel, Grid, Row, Col, Glyphicon,Images,Modal,Button} from 'react-bootstrap';
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
          text: "Front end JavaScript library based on virtual DOM",
              
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
  }

handleClose() {
    this.setState({ show: false });
  }
handleClick = (param) => (e) => { 
   this.setState({ active: param});
   this.setState({ show: true });
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
      {/* technology item grid */}
  <div className ="row" onClick={this.handleShow} >       
      {/* {this.state.details.map(function(details,id){ 
        return(
        <div className ="list-pic col-xs-6 col-md-4 col-lg-2" key={details.id} onClick= this.handleClick(details.id)>
        <div className = "list-pic-innerBlock" >
        <img src={require('../images/'+details.image+'.png')} alt=''/>
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
      )}*/}
      <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[0].id)} >
        <img src={require('../images/'+this.state.details[0].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[0].heading}</h2>                   
            <p>{this.state.details[0].text}</p>
        </div>
        </div>
        </div>
      </div>
      <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[1].id)} >
        <img src={require('../images/'+this.state.details[1].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[1].heading}</h2>                   
            <p>{this.state.details[1].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[2].id)} >
        <img src={require('../images/'+this.state.details[2].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[2].heading}</h2>                   
            <p>{this.state.details[2].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[3].id)} >
        <img src={require('../images/'+this.state.details[3].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[3].heading}</h2>                   
            <p>{this.state.details[3].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[4].id)} >
        <img src={require('../images/'+this.state.details[4].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[4].heading}</h2>                   
            <p>{this.state.details[4].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[5].id)} >
        <img src={require('../images/'+this.state.details[5].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[5].heading}</h2>                   
            <p>{this.state.details[5].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[6].id)} >
        <img src={require('../images/'+this.state.details[6].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[6].heading}</h2>                   
            <p>{this.state.details[6].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[7].id)} >
        <img src={require('../images/'+this.state.details[7].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[7].heading}</h2>                   
            <p>{this.state.details[7].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[8].id)} >
        <img src={require('../images/'+this.state.details[8].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[8].heading}</h2>                   
            <p>{this.state.details[8].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[9].id)} >
        <img src={require('../images/'+this.state.details[9].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[9].heading}</h2>                   
            <p>{this.state.details[9].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[10].id)} >
        <img src={require('../images/'+this.state.details[10].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[10].heading}</h2>                   
            <p>{this.state.details[10].text}</p>
        </div>
        </div>
        </div>
     </div>
     <div className ="list-pic col-xs-6 col-md-4 col-lg-2">
        <div className = "list-pic-innerBlock" onClick={this.handleClick(this.state.details[11].id)} >
        <img src={require('../images/'+this.state.details[11].image+'.png')} alt=''/>
        <div class="overlay">
        <div class="text"><h2>{this.state.details[11].heading}</h2>                   
            <p>{this.state.details[11].text}</p>
        </div>
        </div>
        </div>
     </div>
  </div> 
 {/* <button onClick={this.handleClick('Parameter')}></button> */}
 {/*Modal begins here*/}
 <div className="static-modal">
  <Modal show={this.state.show} onHide={this.handleClose} >
    <Modal.Header>
    <Modal.Title>{this.state.details[this.state.active].heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{this.state.details[this.state.active].text}
    <div>
       <img src={require('../images/'+this.state.details[this.state.active].image+'.png')} alt=''/> 
    </div>
    </Modal.Body>
    <Modal.Footer>
    <Button onClick={this.handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
 </div>
{/*Modal ends here*/}
  </div>
  </div>

); 
}

}
export default Tech;
  