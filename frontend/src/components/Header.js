import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/link">
                <Nav.Link>
                  <i className="fas fa-user"></i>Link
                </Nav.Link>
              </LinkContainer>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/action1">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/action2">
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/action3">
                  <NavDropdown.Item>Something</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />
                <LinkContainer to="/action4">
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
