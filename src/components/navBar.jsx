import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

class NavBarC extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand>Seller-App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <NavDropdown title="Items" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/allitems">All Items</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Add Item</NavDropdown.Item>
                <NavDropdown.Item>Sell Item</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Remove Item</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Customers</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBarC;
