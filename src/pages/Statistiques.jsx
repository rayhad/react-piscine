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
                <Card.Body className='card-text'>Nombres de carnet de notes créer :</Card.Body>
            </Card>
            <Card className='card-stat'>
                <Card.Body className='card-text'>Nombres de carnet de notes :</Card.Body>
            </Card>
            <Card className='card-stat'>
                <Card.Body className='card-text'>Nombres de carnet de notes par catégorie :</Card.Body>
            </Card>

            <div className='arriere2'>
                <h2 className='titre'>Statistiques</h2>
                <Button as={Link} to={'../'} className='buttonStatistique' variant="light">Precedent</Button>
            </div>

            </div>

        </div>
        
    )   
}