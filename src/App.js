import logo from './logo.svg';
import './App.css';
import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Piscine !</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#CarnetdeNote">Carnet de note</Nav.Link>
          <Nav.Link href="#CreationNote">Création d'une note</Nav.Link>
          <Nav.Link href="#PrevNote">Prévisualition d'une note</Nav.Link>
          <Nav.Link href="#ModifNote">Modification d'une note</Nav.Link>
          <Nav.Link href="#GlobalConfig">Configuration globale</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
