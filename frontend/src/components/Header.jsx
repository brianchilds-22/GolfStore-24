// import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/BC-favicon.jpg";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="md" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} width="30" height="30" alt="" loading="lazy" />
              Golf Proshop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <FaUser /> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
