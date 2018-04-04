import React, { Component } from 'react';
import { Clearfix , Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./EmbeddedServices.css";



const EmbeddedServices =  () => {
    
return(
<div>
    <Grid fluid className="show-grid-fluid-embedded-services">
    <Grid className="show-grid-embedded-services">
    <Row className="show-row">
        <Col sm={12} md={3} className="show-title-col" >
        <Row className ="show-title-col-row-title">
            <h1>Embedded Services</h1>
        </Row>
        <Row className ="show-title-col-row-content">
           We spealize in designing fully responsive web applications using modern day framworks.We are a leading service provider in the digital domain, an organization that aspires to drive digital transformation. With our expertise ranging from custom product development, enterprise mobility, UI/UX design, digital marketing, and e-commerce, to technologies such as AI, AR, VR, RPA, and more, we emerge as the one-stop destination for the entire IT needs of businesses. We provide futuristic digital transformation services that enable businesses to keep pace with the emerging trends.
           
        </Row>
        </Col>
        <Col sm={12} md={9} className="show-col-grid" >
        <Row>
            <Col sm={12} md={4} className="show-col-grid-col" >
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            </Col>
            <Col sm={12} md={4} className="show-col-grid-col">
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            </Col>
            <Col sm={12} md={4} className="show-col-grid-col">
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            <Row className="show-col-grid-col-row-item"></Row>
            </Col>
        </Row>
            
        </Col>
          
    </Row>
   </Grid>
   </Grid>

</div>
);
}
export default EmbeddedServices;