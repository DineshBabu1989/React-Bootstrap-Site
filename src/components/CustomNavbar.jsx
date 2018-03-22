import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './CustomNavbar.css'

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
      
      <Navbar.Header>
          <Navbar.Brand>
           GEM Enterprises
          </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar.Header>
    
      <Navbar.Collapse>
        <Nav pullRight>
            <NavItem eventKey={1}  href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2}  href="/about" to="/about">
              About
            </NavItem>
            
             <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
             </NavDropdown>
             <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          <NavItem eventKey={3} href="/news" to="/news">
              Contact
          </NavItem>
        </Nav>
    </Navbar.Collapse>
            
    </Navbar>
        
      
      
    )
  }
}
export default CustomNavbar;