import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Jumbotron.css';
const JumbotronFront = () =>{
    return(
   
       
<Jumbotron>
  <h2>Software Development, Embedded Solutions</h2>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button  bsStyle="primary">LEARN MORE</Button>
  </p>
</Jumbotron>

    );
    }
export default JumbotronFront;

 