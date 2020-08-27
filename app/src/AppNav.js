import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
    NavbarText
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavigationBar extends Component {
    state = {  }
    render() { 
        return (   <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Job advertisement</NavbarBrand>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/categories">Categories-Types</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/advertisement">Advertisement</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/company">Company</NavLink>
                  </NavItem>
                  
                 
                </Nav>
            </Navbar>
          </div>);
    }
}
 
export default NavigationBar;