import React from 'react'
import { Container, Row, Col, Form, Button, Card, CardBody } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../style/Statistiques.css'

export default function Statistiques(){
    return(
        <div>

            <div className='arriere'>
                
            <Card className='card-stat'>
                <Card.Body className='card-text'>Nombre de carnets de notes créés :</Card.Body>
            </Card>
            <Card className='card-stat'>
                <Card.Body className='card-text'>Nombre de carnets de notes :</Card.Body>
            </Card>
            <Card className='card-stat'>
                <Card.Body className='card-text'>Nombre de carnets de notes par catégorie :</Card.Body>
            </Card>

            <div className='arriere2'>
                <h2 className='titre'>Statistiques</h2>
                <Button as={Link} to={'../'} className='buttonStatistique' variant="light">Précédent</Button>
            </div>

            </div>

        </div>
        
    )   
}