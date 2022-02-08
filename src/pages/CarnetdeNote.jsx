import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/App.css';


export default function CarnetdeNote(){
    return(

        <Container className='background'>
            <Row className='row-app'>
                <Col className='col-app-1 my-auto col-4'><h1>Carnet de notes</h1></Col>

                <Col className='col-app-2 my-auto col-8'>
                    <Button as={Link} to={'../CreationCarnet'} style={{marginBottom:'15%'}} className='buttonAccueil'><p style={{lineHeight:'12vh', fontSize:'3vw'}}>Création d'un carnet</p></Button>
                    <Button as={Link} to={'../ListeCarnet'} className='buttonAccueil'><p style={{lineHeight:'12vh', fontSize:'3vw'}}>Listes des carnets</p></Button>
                </Col>         
            </Row>
        </Container>
    )
}