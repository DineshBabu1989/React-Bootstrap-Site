import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import FaDesktop from 'react-icons/lib/fa/desktop';
import MdBuild from 'react-icons/lib/md/build';
import MdPhonelinkSetup from 'react-icons/lib/md/phonelink-setup';
import GoCircuitBoard from 'react-icons/lib/go/circuit-board';
import Fade from 'react-reveal/Fade';
import './WhatWeDo.css';
const WhatWeDo = () =>{
    return(
    <div>
     
<Grid fluid>
  <Row className="show-grid">
      <h3>Our Areas Of Expertise</h3>

    <Fade>  
      <Col className="item" xs={12} md={3}>
        <Row className ="iconHolder"><FaDesktop className = "icon"/></Row> 
        <h3 className ="title">Web Design</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.
    </Col>
       </Fade>
      <Fade>
     <Col className="item" xs={12} md={3}>
        <Row className ="iconHolder"><MdBuild className = "icon"/></Row> 
        <h3 className ="title">Web Development</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.
    </Col>
           </Fade>
        <Fade>
     <Col className="item" xs={12} md={3}>
        <Row className ="iconHolder"><MdPhonelinkSetup className = "icon"/></Row> 
        <h3 className ="title">Mobile App Development</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.
    </Col>
         </Fade>
        <Fade>
     <Col className="item" xs={12} md={3}>
        <Row className ="iconHolder"><GoCircuitBoard className = "icon"/></Row> 
        <h3 className ="title">Embedded and IoT</h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.
    </Col>
             </Fade>
  </Row>

</Grid >
           
    </div>
    );
    }
export default WhatWeDo;


