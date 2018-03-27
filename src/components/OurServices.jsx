import React,{ Component } from 'react';
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import FaDesktop from 'react-icons/lib/fa/desktop';
import './OurServices.css';
const OurServices = ()=>{
    
    return(
    <div>
    <Grid fluid className="topGrid">
    <Grid>
   <Row>
   <Col xs={12} md={4} className="columns">
    <Row className="rows">
       <Col xs ={12} md={12} className="coltexts">
        <h1>Our Services</h1>
            We spealize in designing fully responsive web applications using modern day framworks
        </Col>
       </Row>
    </Col>
    <Col xs={12} md={4} className="columns">
    <Row className="rows">
        <Col xs ={4} md={4}  ><FaDesktop className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Development</h3>
            We spealize in designing fully responsive web applications using modern day framworks
        </Col>
        </Row>
    <Row className="rows">
        <Col xs ={4} md={4}  ><FaDesktop className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Development</h3>
            We spealize in designing fully responsive web designing using
        </Col>
        </Row>
    <Row className="rows">
        <Col xs ={4} md={4}  ><FaDesktop className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Development</h3>
            We spealize in designing fully responsive web designing using
        </Col>
        </Row>
    </Col>
   <Col xs={12} md={4} className="columns">
   <Row className="rows">
       <Col xs ={4} md={4}  ><FaDesktop className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Development</h3>
            We spealize in designing fully responsive web designing using
        </Col>
       </Row>
    <Row className="rows">
       <Col xs ={4} md={4}  ><FaDesktop className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Development</h3>
            We spealize in designing fully responsive web designing using
        </Col>
       </Row>
    <Row className="rows">
       <Col xs ={4} md={4}  ><FaDesktop className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Development</h3>
            We spealize in designing fully responsive web designing using
        </Col>
       </Row>
    </Col>
   </Row>   
    </Grid>
    </Grid>   
    </div>
    );
}
export default OurServices;