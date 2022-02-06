import {Container, Row, Col, Button, Table, Card, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Liste.css'
export default function Liste (){
    const [notes, setNotes] = useState([])
    
    useEffect(() =>{
        let datas = localStorage.getItem('Piscine-Notes')
        ? localStorage.getItem('Piscine-Notes')
        :[]
        datas = JSON.parse(datas)
        setNotes(datas)
    }, [])

    function remove(note, i){
        let rep = window.confirm(
            `Êtes-vous sûr de vouloir supprimer la note suivante ? : ${note.titre}`
        )
        if (rep){
            let tmp = [...notes]
            tmp.splice(i, 1)
            setNotes(tmp)
            localStorage.setItem('Piscine-Notes', JSON.stringify(tmp))
        }
    }

    let displayNotes = notes.map((note, i) => {
        return(
            <tr key={'notes' + note.id}>
                <td>{i + 1}</td>
                <td>{note.titre}</td>
                <td>{note.categorie}</td>
                <td>{note.affnote}</td>
                <td>
                    <Button as={Link} to={'../ModifNote/' + note.id} variant="warning">Modifier</Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => remove(note, i)}>
                        Supprimer
                    </Button>
                </td>
            </tr>
        )
    })
    return (
        <>
        <div className='ListContainer'>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<Card className='ListButton'>
    <Card.Body>
        <Card.Title id="ListTitle">Liste des carnets de notes</Card.Title>
        <Button as={Link} to={'../CarnetdeNote'} className='ListPrecedent'>Precedent</Button>
    </Card.Body>
</Card>


<Form>
    <Form.Check className='ListSwitch'
        type="switch"
        id="custom-switch"
        label="Card / Tab"
    />
</Form>

<nav class="navbarnavbar-light">
    <div class="container-fluid">
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>

<Container >
  
          <Row className='crudStuff'>
            <Col>
              <div className="mb-3">
                <Button as={Link} to={"../CreationNote"}>
                  Ajouter une liste
                </Button>
              </div>
  
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Categorie</th>
                    <th>Note</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>{displayNotes}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
</div>
        
      </>
    )
    console.log({displayNotes})
 }