import React, { Component } from 'react';
import { Grid, Row, Col,Image,Button} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './Clients.css';

class Clients extends Component{
    
    constructor(props){
    super(props);
    this.state = {
                 clientDetails:[
                     {
                     id:0,
                     title:"niagra",
                     image:"niagra"
                     },
                     {
                     id:1,
                     title:"kpriet",
                     image:"kpr"
                     },
                     {
                     id:2,
                     title:"KVS",
                     image:"kvs"
                     },
                     {
                     id:3,
                     title:"PSG",
                     image:"psg"
                     },
                     {
                     id:4,
                     title:"AJK",
                     image:"ajk"
                     },
                     {
                     id:5,
                     title:"SAVIO",
                     image:"savio"
                     },
                     {
                     id:6,
                     title:"HERO",
                     image:"hero"
                     },
                     {
                     id:7,
                     title:"Hyundai",
                     image:"hyundai"
                     },
                     {
                     id:8,
                     title:"Calysto",
                     image:"calysto"
                     },
                     
                     {id:9,
                     title:"Classicpolo",
                     image:"classicpolo"
                     }
                 ]
                 }
    }
    
    renderItem(clientDetails,id){
        
        return(
            <div className="item col-xs-6 col-md-3">
            <div className="itemContent">
            <Image src={require('../../images/Clients-logo/'+clientDetails.image+'.png')} alt='' responsive/>
            </div>
            </div>
        );
    }
    
    
    render()
    {
        return(
            <ScrollAnimation animateIn="fadeIn">
            <div className = "client-style">
            <div className = "container-fluid"> 
            <div className = "container">
            
            <div className = "title col-sm-12 col-md-3">
            <div className ="row"><h2><strong>Clients</strong></h2> </div>
            <div className ="content">It is primarily used for source code management in software dev.but it can be used to keep track changes in set of files</div>
            </div>
            <div className = "grid col-sm-12 col-md-9">
            {this.state.clientDetails.map(this.renderItem)}
            </div>
           
            </div>
            </div>
            </div>
            </ScrollAnimation>   );
    }
    
}
export default Clients;