import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import './intro.css';

const Intro = () => {
    
    return (
    <div>
    <Grid fluid className = "outterRing">
    <Grid>
    <Row className="show-grid">
    <Col xs={12} md={9} className = "innerRing">
     <h2>We are a Web and Electronics Solutions provider</h2> 
      We cater to our clients with hand crafted Web & Mobile Apps using state of the art 
     technologies.Our focus lies in creating visual wonders that provide 
        high end 
     functionality in all spheres. 
    </Col>
    <Col xs={6} md={2} className = "picRing">
      
    </Col>
    </Row> 
    </Grid>
    </Grid>
    </div>
    
    );
    
}
export default Intro;