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
     <h3><span>D</span>esign - <span>F</span>unctionality - <span>P</span>erformance</h3> 
       We believe every project is a masterpiece.We strive our best to develop your applications with the state of the art frameworks.Our experienced developers and creative team of graphic designers,make sure your software stands front in design, functionality, and performance...
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