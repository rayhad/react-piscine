//import logo from './src/img/piscinelogo.png';
import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import '../pages/CarnetdeNote'

export default function header(){
    return(
        <Navbar bg="dark" expand="lg" variant='dark'>
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
              <LinkContainer to="./CarnetdeNote">
              <Nav.Link>Carnet de note</Nav.Link>
              </LinkContainer>
              <LinkContainer to="./Statistiques">
              <Nav.Link>Statistiques</Nav.Link>
              </LinkContainer>
              <LinkContainer to="./CreationNote">
                <Nav.Link>Creation de Note</Nav.Link>
              </LinkContainer>
              <LinkContainer to="./ListeCarnetNotes">
                <Nav.Link>Listes des carnets de notes</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}