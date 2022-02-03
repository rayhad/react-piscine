//import logo from './src/img/piscinelogo.png';
import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const header = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to ="/">
          <Navbar.Brand href="#home"> React-Piscine ! </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
              <Nav.Link href="/">Accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/CarnetdeNote">
              <Nav.Link>Carnet de note</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default header