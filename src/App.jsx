import './style/App.css';
import React from "react";
import { Link } from 'react-router-dom';
import CarnetdeNote from './pages/CarnetdeNote';
import {Card, Button} from 'react-bootstrap'
document.body.style.backgroundColor = 'white'

export default function App(){
  return(
    <div className='background'>
      
      <div className='box'>
        <h1>Accueil</h1>
        <div className='box2'>
        <Button as={Link} to={'../CarnetDeNote'} className='buttonAccueil'><br/><br/>Carnet de notes</Button>
        <Button as={Link} to={'../Statistiques'} className='buttonAccueil'><br/><br/>Statistiques</Button>
        </div>
      </div>

    </div>
  )
}