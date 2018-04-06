import React, { Component } from 'react';
import { Grid, Row, Col,Image,Button} from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";

const Footer = () => {
    
    return(
    <div>
       <div className = "footer-style">
       
       <div className = "container-fluid">
           <div className ="social row">
           <div className =" container">
       <div className = " social-links-col-msg col-sm-12 col-md-6">
       <p className ="footer-welcome">Get Connected with us on social network !</p> </div>
       <div className = "social-links-col-links col-sm-12 col-md-6 text-center">
       <ul>   
       <li><i className="social-icons fa fa-facebook-official"></i></li>
       <li><i className="social-icons fa fa-google-plus-square"></i></li>
       <li><i className="social-icons fa fa-twitter-square"></i></li>
       <li><i className="social-icons fa fa-linkedin-square"></i></li>
       </ul>
      </div>
      </div> 
           </div>
       
       <div className ="row">
       <div className = "container">
       <div className ="row">
       <div className = "footer-column col-sm-12 col-md-3">
        <h3><strong>GEM Enterprises</strong></h3>
        <hr className="underLine"/>
        <p className = "about-text">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className = "footer-column col-sm-12 col-md-3">
       <h3><strong>Products</strong></h3>
        <hr className="underLine"/>
        <p> <a href="#!">Web Apps</a></p>
        <p> <a href="#!">E-Commerce</a></p>
        <p> <a href="#!">SEO-Marketting</a></p>
        <p> <a href="#!">IoT-Products</a></p>
        <p> <a href="#!">Mobile Apps</a></p>
       </div>
       <div className = "footer-column col-sm-12 col-md-3">
       <h3><strong>Usefull Links </strong></h3>
        <hr className="underLine"/>
        <p> <a href="#!">About Us</a></p>
        <p> <a href="#!">Services</a></p>
        <p> <a href="#!">Products</a></p>
        <p> <a href="#!">Training</a></p>
        <p> <a href="#!">Technology</a></p>
       </div>
       <div className = "footer-column col-sm-12 col-md-3">
       <h3><strong>Contact</strong></h3> 
        <hr className="underLine"/>
        <p >
        <i className="fa fa-home fa-fw" aria-hidden="true"></i>
        33D,Anbu nagar,5th Street,
        </p>
        <p className = "address">Vadavalli road,Edayarpalayam,</p>
        <p className = "address">Coimbatore-25.</p>
        <p>
        <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>info@gementerprises.com 
        </p>
        <p>
         <i className="fa fa-phone fa-fw" aria-hidden="true"></i>+91-9790685775 
        </p>
       </div>
       </div>
       </div>
       </div>
       <div className ="row">
       <div className = "footer-bottom text-center-fluid">
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
        
        
    
}
export default Footer;