import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

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
              <Nav.Link>
                <Link to="/products">Products</Link>
              </Nav.Link>
              <Nav.Link>Customers</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBarC;
