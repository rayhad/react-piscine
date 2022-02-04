import '../style/CreationNote.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, Input, ListGroupItem, ListItem, ListGroup, Form} from 'react-bootstrap'

export default function CreationNote() {
    return(
        <div>
            <div className='cardContainer'>
                <Card className='cardButton'>
                    <Card.Title id="creationTitle">Création d'une note</Card.Title>
                    <Button className="btnCreation1">Prévisualiser</Button>
                    <Button className="btnCreation1">Précédent</Button>
                </Card>

                <Card className='cardCreation' >
                    <Card.Body>
                        <Card.Title><input placeholder='Insérez un titre à votre note'></input></Card.Title>
                        <Form.Select aria-label="Default select example">
                            <option>Sélectionnez une catégorie</option>
                            <option value="1">Catégorie 1</option>
                            <option value="2">Catégorie 2</option>
                            <option value="3">Catégorie 3</option>
                        </Form.Select>
                    </Card.Body>
                    <Form>
                        <Form.Control id="entreeNote" type="text" placeholder="Votre note..." />
                    </Form>
                    <Card.Body className="btnEnregistrer-annuler">
                        <Button className="Enregistrer-annuler">Enregistrer</Button>
                        <Button className="Enregistrer-annuler">Annuler</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}