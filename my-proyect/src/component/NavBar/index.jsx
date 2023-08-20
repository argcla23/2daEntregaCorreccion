import React from "react";
import CartWidget from "../CartWidget/index";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BarraNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/' >CleanCar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Productos</Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/mantenimiento' >Mantenimiento</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/limpieza' >
                Limpieza
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/body'>Body</NavDropdown.Item>
              <NavDropdown.Divider />
              
              </NavDropdown>
              <NavLink style={{textDecoration: 'none'}} to='/Cart'><CartWidget/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BarraNav;