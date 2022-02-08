import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import {Link,useNavigate,useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function ModifNote(){
    const [Note, setNote] = useState ({})
    const [NoteEdit, setNoteEdit] = useState({
        id:'',
        titre: '',
        categorie: '',
        affnote: '',
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        let liste = localStorage.getItem('Piscine-Notes')
        liste = JSON.parse(liste)
        let res = liste.filter(Note => Note.id === Number(id))

        if (res.length === 0){
            alert('Aucune note dans la base')
            navigate('/Liste')
        }else {
            setNote(res[0])
            setNoteEdit(res[0])
        }
    },[id, navigate])

    function edit(e){
        e.preventDefault()
        let liste = localStorage.getItem('Piscine-Notes')
        liste = JSON.parse(liste)

        let i_a = -1
        for (let i = 0; i < liste.length; i++)
            if (liste[i].id === Number(id)) i_a = i

        if (i_a === -1){
            alert("Erreur lors de l'enregistrement")
            return null
        }
        liste[i_a] = NoteEdit
        localStorage.setItem('Piscine-Notes', JSON.stringify(liste))
        navigate('/Liste')
    }
    function reset(){
        setNoteEdit(Note)
    }

    return (
        <div>
        <div className='cardContainer'>
            <Card className='cardButton'>
                <Card.Body>
                    <Card.Title id="creationTitle">Création d'une note</Card.Title>
                    <Button as={Link} to={'../PreviNote'} className="btnCreation1">Prévisualiser</Button>
                    <Button className="btnCreation1">Précédent</Button>
                </Card.Body>
            </Card>

            <Card className='cardCreation' >
            <Form onSubmit={e => edit(e)}>
                <Card.Body>
                    <Card.Title>
                        
                        <Form.Group>
                        <Form.Control type="text" placeholder='Insérez un titre à votre note' 
                        value ={NoteEdit.titre} 
                        onChange={e => {let tmp ={ ...NoteEdit } 
                        tmp.titre=e.target.value 
                        setNoteEdit(tmp)}} required />
                        </Form.Group>
                        
                    </Card.Title>
                    <Form.Group>
                    <Form.Select value={NoteEdit.categorie} onChange={e => {
                        let tmp = {...NoteEdit}
                        tmp.categorie = e.target.value
                        setNoteEdit(tmp)
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
                    <Form.Control id="entreeNote" placeholder="Votre note..." value={NoteEdit.affnote} onChange={e => {
                        let tmp = {...NoteEdit}
                        tmp.affnote = e.target.value
                        setNoteEdit(tmp)
                    }} required/>
                </Form.Group>
                    <br></br>
                    <Button variant="success" type="submit" className="Enregistrer-annuler">Modifier et Enregistrer</Button>
                    <Button className="Enregistrer-annuler">Annuler la modification</Button>
                </Form>
            </Card>
        </div>

    </div>
    )
}