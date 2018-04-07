import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import './Intro.css';
import MdImportantDevices from 'react-icons/lib/md/important-devices';
import GoCircuitBoard from 'react-icons/lib/go/circuit-board';


const Intro = () => {
    
    return (
    <div>
    <Grid fluid className = "outterRing">
    <Grid>
    <Row className="show-grid">
    <Col xs={12} md={9} className = "innerRing">
     <h1>We are a web and electronics solutions provider</h1> 
      We cater to our clients with hand crafted Web & Mobile Apps using state of the art 
     technologies.Our focus lies in creating visual wonders that provide high end functionality in all spheres. 
    </Col>
    <Col xs={12} md={2} className ="iconHolder">
    
              <MdImportantDevices className = "icon"/>
          
        
    </Col>
    </Row> 
    </Grid>
    </Grid>
    </div>
    
    );
    
}
export default Intro;