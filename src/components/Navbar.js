import React from "react";
import { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/authentication/AuthContext";

export default function Navbar1() {
  let location = useLocation();
  const { logout, token, user } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="dark" className="navbar-dark" expand="xl">
        <Navbar.Brand as={Link} to="/" className="ms-4">
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
          {!token ? (
            <div className="me-4">
              <Button
                as={Link}
                to="/login"
                className="mx-1"
                variant="outline-success"
              >
                Login
              </Button>
              <Button
                as={Link}
                to="/signup"
                className="mx-1"
                variant="outline-success"
              >
                Signup
              </Button>
            </div>
          ) : (
            <div className="me-4">
              <Navbar.Text className="me-4">
                Signed in as: <b>{user ? user.name : "User"}</b>
              </Navbar.Text>
              <Button
                onClick={logout}
                className="mx-1"
                variant="outline-danger"
              >
                Logout
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
