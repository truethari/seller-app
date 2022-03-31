import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

class NavBarC extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Seller-App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Items" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  All Items
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Add Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sell Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Remove Item
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#customers">Customers</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBarC;
