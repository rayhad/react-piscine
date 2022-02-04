import './style/App.css';
import React from "react";
import { Link } from 'react-router-dom';
import CarnetdeNote from './pages/CarnetdeNote';
import {Card, Button} from 'react-bootstrap'

export default function App(){
  return(
    <div className='background'>
      
      <div className='box'>
        <h1>Accueil</h1>
        <div className='box2'>
        <Button as={Link} to={'../CarnetDeNote'} className='button'><br/><br/>Carnet de notes</Button>
        <Button as={Link} to={'../Statistiques'} className='button'><br/><br/>Statistiques</Button>
        </div>
      </div>

        
      
    </div>
  )
}