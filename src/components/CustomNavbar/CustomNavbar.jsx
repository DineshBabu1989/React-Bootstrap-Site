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
          <img className="logofix" src={logo} />
          <Navbar.Brand>
           <strong> GEM Enterprises </strong> 
          </Navbar.Brand>
          <Navbar.Toggle />
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
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
         </NavDropdown>
         <NavDropdown eventKey={3} title="PRODUCTS" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
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