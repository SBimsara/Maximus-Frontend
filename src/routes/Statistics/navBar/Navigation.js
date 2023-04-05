import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const items = [
    { id: 0, name: "Select Chart", path: "/statistics" },
    { id: 1, name: "Chart 1", path: "/statistics/Stat0" },
    { id: 2, name: "Chart 2", path: "/statistics/Stat1" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(items[0].name);

  const handleOptionSelect = (eventKey) => {
    const selected = items.find((item) => item.id == eventKey);
    setSelectedOption(selected.name);
    navigate(selected.path);
  };

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
          <NavDropdown
            className="btn btn-lg "
            title={selectedOption}
            id="basic-nav-dropdown"
            onSelect={handleOptionSelect}
          >
            {items.map((item) => (
              <LinkContainer key={item.id} to={item.path}>
                <NavDropdown.Item
                  eventKey={item.id}
                  active={item.id === selectedOption.id}
                >
                  {item.name}
                </NavDropdown.Item>
              </LinkContainer>
            ))}
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return null;
  }
}

export default Navigation;

// {
//    <LinkContainer to={"/statistics/Stat0"}>
//               <NavDropdown.Item
//                 eventKey="Stat0"
//                 // href="/statistics/Stat0"
//                 // onClick={() => navigate("/statistics/Stat0")}
//                 active={selectedOption === "Stat0"}
//               >
//                 Stat0
//               </NavDropdown.Item>
//             </LinkContainer>
//             <LinkContainer to={"/statistics/Stat1"}>
//               <NavDropdown.Item
//                 eventKey="Stat1"
//                 // href="/statistics/Stat1"
//                 // onClick={() => navigate("/statistics/Stat1")}
//                 active={selectedOption === "Stat1"}
//               >
//                 Stat1
//               </NavDropdown.Item>
//             </LinkContainer>
// }
