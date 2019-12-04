import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavbarComponent extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    // <Router>
    <div>

      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Mens</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Link to="/mens-items">
                    <MDBDropdownItem >Men's</MDBDropdownItem>
                  </Link>
                  <MDBDropdownItem >Women's</MDBDropdownItem>
                  <MDBDropdownItem >Jewelery</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Women's</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem >
                  <Link to="/mens-items">
                      Shirts
                  </Link>
                      </MDBDropdownItem>
                  <MDBDropdownItem >Denim</MDBDropdownItem>
                  <MDBDropdownItem >Tees Plain</MDBDropdownItem>
                  <MDBDropdownItem >Tees Graphics</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Accessories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Link to="/mens-items">
                    <MDBDropdownItem >Hats</MDBDropdownItem>
                  </Link>
                  <MDBDropdownItem >Belts</MDBDropdownItem>
                  <MDBDropdownItem >Chains</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
    // </Router>
    );
}
}

export default NavbarComponent;