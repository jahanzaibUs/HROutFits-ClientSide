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
                    <MDBDropdownItem >
                  <Link to="/mens-items">
                      Winter Wear
                  </Link>
                      </MDBDropdownItem>
                      <Link to='/mens-shirts'>

                  <MDBDropdownItem >Shirts</MDBDropdownItem>
                      </Link>
                      <Link to='mens-basics-tees'>

                  <MDBDropdownItem >Basic Tees</MDBDropdownItem>
                      </Link>
                      <Link to='mens-graphics-tees'>

                  <MDBDropdownItem >Graphics Tees</MDBDropdownItem>
                      </Link>
                  <MDBDropdownItem >Polo</MDBDropdownItem>
                  <MDBDropdownItem >Denim</MDBDropdownItem>

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
                  <Link to="/womens-winter-wear">
                      Winter Wear
                  </Link>
                      </MDBDropdownItem>
                  <MDBDropdownItem >Tops</MDBDropdownItem>
                  <MDBDropdownItem >Shirts</MDBDropdownItem>
                  <MDBDropdownItem >Denim</MDBDropdownItem>
                  <MDBDropdownItem >Bags</MDBDropdownItem>
                  <MDBDropdownItem >Shawls</MDBDropdownItem>

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
                    <MDBDropdownItem >Watchs</MDBDropdownItem>
                  </Link>
                  <MDBDropdownItem >Caps</MDBDropdownItem>
                  <MDBDropdownItem >Bracelets</MDBDropdownItem>
                  <MDBDropdownItem >Socks</MDBDropdownItem>
                  <MDBDropdownItem >Belts</MDBDropdownItem>
                  <MDBDropdownItem >Glasses</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
    // </Router>
    );
}
}

export default NavbarComponent;