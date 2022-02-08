import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/Statistiques.css'


export default function Statistiques({note}){
    return(
        <Container className='background'>

            <Row className='row-app'>

            <Col className='col-app-1 my-auto col-9'>
                <Card className='card-stat'>
                    <Card.Body className='card-text'>Nombre de carnets de notes créés :</Card.Body>
                </Card>
                <Card className='card-stat'>
                    <Card.Body className='card-text'>Nombre de notes : </Card.Body>
                </Card>
                <Card className='card-stat'>
                    <Card.Body className='card-text'>Nombre de carnets de notes par catégorie :</Card.Body>
                </Card>
            </Col>    
            

            <Col className='col-app-2 my-auto col-3'>
                <h2 className='titre'>Statistiques</h2>
                <Button as={Link} to={'../'} className='buttonStatistique' variant="light">Précédent</Button>
            </Col>

            </Row>

        </Container>
        
    )   
}