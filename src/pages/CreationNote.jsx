import '../style/CreationNote.css';
import React from 'react';
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Button, Input, ListGroupItem, ListItem, ListGroup, Form} from 'react-bootstrap'
import { Converter } from 'showdown'


export default function CreationNote() {
    const converter = new Converter()

    const [NoteAdd, setNoteAdd] = useState({
        id:'',
        titre: '',
        categorie: '',
        affnote: '',
    })

    const navigate = useNavigate()
    
    function add(e){
        e.preventDefault()

        const id = Date.now()
        let tmpNote = {...NoteAdd}
        tmpNote.id = id
        setNoteAdd(tmpNote)
    

    let notes = localStorage.getItem('Piscine-Notes')
    if(notes === null) notes= '[]'
    notes = JSON.parse(notes)
    notes.push(tmpNote)
    localStorage.setItem('Piscine-Notes', JSON.stringify(notes))
    navigate('/Liste')
    
}
    let text = NoteAdd.affnote,
    htmlMD = converter.makeHtml(text)
  

    return(
        <div>
            
            <div dangerouslySetInnerHTML={{ __html: htmlMD }} /> 


            <div className='cardContainer'>


                <Card className='cardCreation' >
                <Form onSubmit={e => add(e)}>
                    <Card.Body>
                        <Card.Title>
                            
                            <Form.Group>
                            <Form.Control type="text" placeholder='Insérez un titre à votre note' 
                            value ={NoteAdd.titre} 
                            onChange={e => {let tmp ={ ...NoteAdd } 
                            tmp.titre=e.target.value 
                            setNoteAdd(tmp)}} required />
                            </Form.Group>
                            
                        </Card.Title>
                        <Form.Group>
                        <Form.Select value={NoteAdd.categorie} onChange={e => {
                            let tmp = {...NoteAdd}
                            tmp.categorie = e.target.value
                            setNoteAdd(tmp)
                        }}
                        required>
                            <option>Sélectionnez une catégorie</option>
                            <option value="1">Catégorie 1</option>
                            <option value="2">Catégorie 2</option>
                            <option value="3">Catégorie 3</option>
                        </Form.Select>
                        </Form.Group>
                    </Card.Body>
                    <Form.Group>
                        <Form.Control id="entreeNote" placeholder="Votre note..." value={NoteAdd.affnote} onChange={e => {
                            let tmp = {...NoteAdd}
                            tmp.affnote = e.target.value
                            setNoteAdd(tmp)
                        }} required/>
                    </Form.Group>
                        <br></br>
                        <Button variant="success" type="submit" className="Enregistrer-annuler">Enregistrer</Button>
                        <Button className="Enregistrer-annuler">Annuler</Button>
                    </Form>
                </Card>
                
            </div>
                        
            

        </div>
    )
}