import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../style/CarnetNotes.css';

export default function CarnetdeNote(){
    return(
        <div>

            <div className='Arriere-plan1'>
                <div className='Titre'>
                    <h1>Carnets de notes</h1>    
                </div>   

                <div className='Arriere-plan2'>
                    <Button as={Link} to={'../CreationNote'} className='buttonCarnet'><p>Création d'une note</p></Button>
                    <Button as={Link} to={'../Liste'} className='buttonCarnet'><p>Listes des Carnets de notes</p></Button>
                </div>         


            </div>

        </div>
    )
}