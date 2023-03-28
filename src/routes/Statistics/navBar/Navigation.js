import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState("Stat0");

  const handleOptionSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  let navigate = useNavigate();

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
        <Navbar.Brand style={{ paddingLeft: "8px" }}>
          Select an Item
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto">
            <LinkContainer to="/statistics/Stat0">
              <Nav.Link>Stat0</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/statistics/Stat1">
              <Nav.Link>Stat1</Nav.Link>
            </LinkContainer>
          </Nav> */}
          <NavDropdown
            className="btn btn-lg "
            title={selectedOption}
            id="basic-nav-dropdown"
            onSelect={handleOptionSelect}
          >
            <NavDropdown.Item
              eventKey="Stat0"
              href="/statistics/Stat0"
              // onClick={() => navigate("/statistics/Stat0")}
            >
              Stat0
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="Stat1"
              href="/statistics/Stat1"
              onClick={() => navigate("/statistics/Stat0")}
            >
              Stat1
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return null;
  }
}

export default Navigation;
