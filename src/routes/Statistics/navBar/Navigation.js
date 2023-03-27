import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  if (
    location.pathname === "/statistics" ||
    location.pathname === "/statistics/Stat0" ||
    location.pathname === "/statistics/Stat1"
  ) {
    return (
      <Navbar
        bg="light"
        expand="lg"
        style={{ paddingTop: "60px", paddingLeft: "238px" }}
      >
        {/* <Navbar.Brand href="/statistics">My Website</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/statistics/Stat0">
              <Nav.Link>Stat0</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/statistics/Stat1">
              <Nav.Link>Stat1</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return null;
  }
}

export default Navigation;
