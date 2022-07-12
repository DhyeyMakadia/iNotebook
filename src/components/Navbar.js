import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Navbar1() {
  let location = useLocation();
  return (
    <>
      <Navbar bg="dark" className="navbar-dark" expand="xl">
        <Container className="ms-0">
          <Navbar.Brand as={Link} to="/">
            iNoteBook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className={`${location.pathname === "/" && "active"}`}
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`${location.pathname === "/about" && "active"}`}
                as={Link}
                to="/about"
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
