import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar className="nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">R❤️J</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
