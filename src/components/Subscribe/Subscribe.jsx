import React, { Component } from 'react';
import {  Grid, Row, Col, Image, Button } from 'react-bootstrap';
import'./Subscribe.css';

const Subscribe = () => {

return(
<div>
<Grid fluid className ="baseGrid">
<Grid>
     
    <Row className="show-grid">
   
    <Col xs={12} md={8} className ="subscribeText">
      <h2><strong>Subscribe Us - For Updates ,News & Offers</strong> </h2>
      <p>Join our 500+ subscribers to avail updates about product launches, updates and webinars and training programs</p>
    </Col>
    <Col xs={12} md={4} className ="subscribeButtonHolder">
      <Button  bsStyle="primary2">SUBSCRIBE</Button>
    </Col>
  </Row>
     
    
    
    
</Grid>

</Grid>
</div>
);

}
export default Subscribe;