import React,{ Component } from 'react';
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './OurServices.css';
/* import icons*/
import FaCogs from 'react-icons/lib/fa/cogs';
import MdDeveloperMode from 'react-icons/lib/md/developer-mode';
import FaCloud from 'react-icons/lib/fa/cloud';
import FaSearchPlus from 'react-icons/lib/fa/search-plus';
import FaServer from 'react-icons/lib/fa/server';
import FaUserPlus from 'react-icons/lib/fa/user-plus';


const OurEmbeddedServices = ()=>{
    
    return(
    <div>
    <Grid fluid className="outterGrid">
    <Grid>
    <Row>
    <Col xs={12} md={4} className="columns">
    <ScrollAnimation animateIn="fadeIn">
    <Row className="rowsTile">
       <Col xs ={12} md={12} className="columnText">
        <Row className ="titleRow">
            <h2><strong>Embedded Services </strong></h2>
        </Row>
        <Row className ="titleRowContent">
           We spealize in designing fully responsive web applications using modern day framworks.We are a leading service provider in the digital domain, an organization that aspires to drive digital transformation. With our expertise ranging from custom product development, enterprise mobility, UI/UX design, digital marketing, and e-commerce, to technologies such as AI, AR, VR, RPA, and more, we emerge as the one-stop destination for the entire IT needs of businesses. We provide futuristic digital transformation services that enable businesses to keep pace with the emerging trends.
        </Row>
        </Col>
    </Row>
    </ScrollAnimation>  
    </Col>
    <Col xs={12} md={4} className="columns">
    <ScrollAnimation animateIn="fadeIn">
    <Row className="rows">
        <Col xs ={4} md={4}  ><FaCogs className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Product Development</h3>
            We spealize in designing fully responsive web applications using modern day frameworks.
        </Col>
        </Row>
    <Row className="rows">
        <Col xs ={4} md={4}  ><MdDeveloperMode className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Mobile-Application Development</h3>
            Hybrid Mobile Applications provide a rich user experience with all functionalities of a Web App.
        </Col>
        </Row>
    <Row className="rows">
        <Col xs ={4} md={4}  >< FaCloud  className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>IoT Products</h3>
          How many of your website visitors are turning into customers? We will help make your ecommerce website your most effective selling tool.
        </Col>
        </Row>
    </ScrollAnimation> 
    </Col>
   <Col xs={12} md={4} className="columns">
   <ScrollAnimation animateIn="fadeIn">
   <Row className="rows">
       <Col xs ={4} md={4}  ><FaUserPlus className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>CMS</h3>
            Content Management Systems offer website owners a convenient way of modifying content on their site.
        </Col>
       </Row>
    <Row className="rows">
       <Col xs ={4} md={4}  ><FaSearchPlus  className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>SEO </h3>
            To generate business you need traffic on your website, new traffic. That is what SEO does.
        </Col>
       </Row>
    <Row className="rows">
       <Col xs ={4} md={4}  ><FaServer  className = "icon1"/></Col>
        <Col xs ={8} md={8} className="coltext">
        <h3>Web Hosting</h3>
           Get reliable, high-performance hosting, that fits your budget with 99.99% uptime and support on hosting issues.
        </Col>
       </Row>
    </ScrollAnimation> 
    </Col>
   </Row>   
    </Grid>
    </Grid>   
    </div>
    );
}
export default OurEmbeddedServices;