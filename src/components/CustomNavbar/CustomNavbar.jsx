import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import logo from '../../images/logogem.svg';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
      
      <Navbar.Header>
          <Navbar.Toggle />
          <img className = "logofix" src={logo} />
     </Navbar.Header>
    
     <Navbar.Collapse>
         <Nav pullRight>
         <NavItem eventKey={1}  href="/" to="/">
              HOME
         </NavItem>
         <NavItem eventKey={2}  href="/About" to="/About">
              ABOUT
         </NavItem>
         <NavDropdown eventKey={3} title="SERVICES" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Web Development</MenuItem>
              <MenuItem eventKey={3.2}>E-Commerce Web Apps</MenuItem>
              <MenuItem eventKey={3.3}>Native Mobile Apps</MenuItem>
              <MenuItem eventKey={3.4}>Hybrid Mobile Apps</MenuItem>
              <MenuItem eventKey={3.5}>CMS Web Development</MenuItem>
              <MenuItem eventKey={3.6}>SEO,Hosting</MenuItem>
              <MenuItem eventKey={3.7}>Embedded Solutions</MenuItem>
              <MenuItem eventKey={3.8}>IoT Solutions</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Request Quote</MenuItem>
         </NavDropdown>
         <NavDropdown eventKey={4} title="PRODUCTS" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>IoT Data Loggers</MenuItem>
              <MenuItem eventKey={4.2}>Custom Data Visualizers</MenuItem>
              <MenuItem eventKey={4.3}>GPS Tracking Systems</MenuItem>
              <MenuItem eventKey={4.3}>GSM Irrigators</MenuItem>
              <MenuItem eventKey={4.3}>Water Level Controllers</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4}>Request Quote</MenuItem>
         </NavDropdown>
         <NavItem eventKey={3} href="/news" to="/news">
              CONTACT
          </NavItem>
          </Nav>
    </Navbar.Collapse>
            
    </Navbar>
        
      
      
    )
  }
}
export default CustomNavbar;