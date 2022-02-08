import './style/App.css';
import React from "react";
import { Link } from 'react-router-dom';
import CarnetdeNote from './pages/CarnetdeNote';
import {Card, Button, Col, Row, Container} from 'react-bootstrap'
document.body.style.backgroundColor = 'white'

export default function App(){
  return(

    <Container className='background'>
      <Row className='row-app'>
        <Col className='col-app-1 my-auto col-4'><h1>Accueil</h1></Col>
        <Col className='col-app-2 my-auto col-8'>
          <Button as={Link} to={'../CarnetDeNote'} style={{marginBottom:'15%'}} className='buttonAccueil'><p style={{lineHeight:'10vh'}}>Carnet de notes</p></Button>
          <Button as={Link} to={'../Statistiques'} className='buttonAccueil'><p style={{lineHeight:'10vh'}}>Statistiques</p></Button>
        </Col>
      </Row>
    </Container>
  )
}

