import '../style/CarnetNotes.css';
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function CarnetdeNote(){
    return(
        <div>

            <div className='Arriere-plan1'>
                <div className='Titre'>
                    <h1>Carnets de notes</h1>    
                </div>   

                <div className='Arriere-plan2'>
                    <Button as={Link} to={'../CreationNote'} className='buttonCarnet'><p>Création d'une note</p></Button>
                    <Button as={Link} to={'../ListeCarnetNotes'} className='buttonCarnet'><p>Listes des Carnets de notes</p></Button>
                </div>         


            </div>

        </div>
    )
}