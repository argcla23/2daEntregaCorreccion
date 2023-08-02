import React from "react";
import CartWidget from "../CartWidget/index";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BarraNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CleanCar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mantenimiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Performance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Body</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todos los productos
              </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#cart"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BarraNav;