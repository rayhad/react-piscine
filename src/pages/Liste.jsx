import {Container, Row, Col, Button, Table, Card, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
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
                <td id="afficher-note">{note.affnote}</td>
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

    <Navbar bg="dark" variant="dark" expand="lg" className="NavList">
        <Container fluid>
            <Navbar.Brand href="#">Liste des carnets</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

    <Nav.Link href="#action1">Home</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


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