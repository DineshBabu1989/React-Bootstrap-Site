import React, { Component } from 'react';
import './AboutScroller.css';
class AboutScroller extends Component {
 constructor(props){
     super(props);
     this.state = { 
         locations:1, 
         experience:1, 
         employees:1, 
         clients:1
     }
       
 }

componentDidMount() {
       {this.startTimer();}
}
    
tick(){
      
      if( this.state.locations < 3)
         {
         this.setState({locations : this.state.locations + 1});  
         this.setState({experience : this.state.experience + 1});
         this.setState({employees : this.state.employees + 1});   
         this.setState({clients : this.state.clients+ 1});      
         }
      else if( this.state.experience < 12 )
         {
         this.setState({experience : this.state.experience + 1}); 
         this.setState({employees : this.state.employees + 1});   
         this.setState({clients : this.state.clients+ 1});   
          }
      else if( this.state.employees < 50 )
         {
         this.setState({employees : this.state.employees + 1});  
         this.setState({employees : this.state.employees + 1});   
         this.setState({clients : this.state.clients+ 1});   
         }
      else if( this.state.clients < 300 )
         {
         this.setState({clients : this.state.clients+ 1});     
         }
      else
          {
          clearInterval(this.timer);
          }
      
  }
    
  startTimer(){
      
      this.timer = setInterval( this.tick.bind(this),100);
  }
    
render(){
     
     return(
            <div className = "scroller">
            <div className = "container" onMouseOver = {this.startTimer.bind(this)}>
            <div className = "scrollerText col-xs-6 col-md-3">
            <h1>{this.state.locations}</h1>
            <p>Locations</p>
            </div>
            <div className = "scrollerText col-xs-6 col-md-3">
            <h1> {this.state.experience}+ </h1>
            <p>Experience</p>
            </div>
            <div className = "scrollerText col-xs-6 col-md-3">
            <h1> {this.state.employees}+  </h1>
            <p>Employees</p>
            </div>
            <div className = "scrollerText col-xs-6 col-md-3">
            <h1> {this.state.clients}+ </h1>
            <p>Clients</p>
            </div>
            </div>
            </div>      
           );
}
}
export default AboutScroller;