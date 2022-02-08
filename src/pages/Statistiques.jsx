import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/Statistiques.css'
import '../style/App.css'


export default function Statistiques(){

    let note = JSON.parse(localStorage.getItem('Piscine-Notes'))

    return(
        <Container className='background'>

            <Row className='row-app'>

            <Col className='col-app-1 my-auto col-9'>
                <Card className='card-stat'>
                    <Card.Body className='card-text'>Nombre de carnets de notes :</Card.Body>
                </Card>

                <Card className='card-stat'>
                    <Card.Body className='card-text'>Nombre de carnets de notes par catégorie :</Card.Body>
                </Card>

                <Card className='card-stat'>
                    <Card.Body className='card-text'>Nombre de notes : {note.length}</Card.Body>
                </Card>
            </Col>    
            

            <Col className='col-app-2 my-auto col-3 col-stats'>
                <h2 className='titre'>Statistiques</h2>
                <Button as={Link} to={'../'} className='buttonStatistique' variant="light">Précédent</Button>
            </Col>

            </Row>

        </Container>
        
    )   
}