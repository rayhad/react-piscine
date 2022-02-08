import '../style/CreationNote.css';
import React from 'react';
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Button, Form, Container, Row} from 'react-bootstrap'
import '../style/App.css'

export default function CreationCarnet(){

    const [CarnetAdd, setCarnetAdd] = useState({
        id:'',
        titre:'',
        categorie:''
    })

    const navigate = useNavigate()

    function add(e){
        e.preventDefault()
        const id = Date.now()
        let tmpCarnet = {...CarnetAdd}
        tmpCarnet.id = id
        setCarnetAdd(tmpCarnet)

        let carnets = localStorage.getItem('Piscine-Carnet')
        if (carnets === null) carnets= '[]'
        carnets = JSON.parse(carnets)
        carnets.push(tmpCarnet)
        localStorage.setItem('Piscine-Carnet', JSON.stringify(carnets))
        navigate('/ListeCarnet')
}   
    
    return(
        <Container>
            <Row>
                <Card style={{width:'80%', height:'25vh'}}className='cardCreation'>
                    <Form onSubmit={e => add(e)}>
                        <Card.Body>
                            <Card.Title>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Insérez un titre à votre carnet"
                                    value ={CarnetAdd.titre}
                                    onChange={e => {let tmp ={...CarnetAdd}
                                    tmp.titre=e.target.value
                                    setCarnetAdd(tmp)}} required />
                                </Form.Group>
                            </Card.Title>
                            <Form.Group>
                                <Form.Select value={CarnetAdd.categorie} onChange={e => {
                                    let tmp = {...CarnetAdd}
                                    tmp.categorie = e.target.value
                                    setCarnetAdd(tmp)
                                    }}required>

                                    <option value="null">Sélectionnez une catégorie</option>
                                    <option value="DIVT">Divertissement</option>
                                    <option value="PRO">Professionnel</option>
                                    <option value="VIE-QTD">Vie quotidienne</option>
                                </Form.Select>
                            </Form.Group>
                        </Card.Body>
                        <Button variant="success" type="submit" className="Enregistrer-annuler">Enregistrer</Button>
                        <Button as={Link} to={'../ListeCarnet'}className="Enregistrer-annuler">Annuler</Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    )
}