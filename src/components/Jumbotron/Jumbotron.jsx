import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Jumbotron.css';
const JumbotronFront = () =>{
    return(
   
       
<Jumbotron>
  <h2>Fetch( Clients ).then( "Meet Demands" ).catch( "Reiterate Exceed Expectations");</h2>
   <p className = "jumbotronText">
   A webapp speaks thousand words about a company or a business.We make sure it does it in the best way possible...
  </p>
  <p>
  <Button  bsStyle="primary">LEARN MORE</Button>
  </p>
</Jumbotron>

    );
    }
export default JumbotronFront;

 