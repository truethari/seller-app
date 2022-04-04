import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBasketShopping,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

class NavBarC extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Navbar.Brand>Seller-App</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{ marginRight: "3px" }}
                  />
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/products"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <FontAwesomeIcon
                    icon={faBasketShopping}
                    style={{ marginRight: "3px" }}
                  />
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon
                  icon={faPerson}
                  style={{ marginRight: "3px" }}
                />
                Customers
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBarC;
