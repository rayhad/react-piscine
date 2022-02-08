import {Container, Row, Col, Button, Table, Card, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../style/Liste.css'
import Search from './Search'
import { useParams } from 'react-router-dom'

// ------------------FUNCTION-----------------------

export default function Liste (){
    const { id } = useParams()
    const [notes, setNotes] = useState([])
    const [notesSearch, setNotesSearch] = useState([])
    const [isSwitchOn, setIsSwitchOn] = useState({})
    const [searchText, setSearchText] = useState('');
    
    // ----------------- LOCAL STORAGE -----------------
    
    useEffect(() =>{
        let datas = localStorage.getItem('Piscine-Notes')
        ? localStorage.getItem('Piscine-Notes')
        :[]
        datas = JSON.parse(datas)
        setNotes(datas)
    }, [])


    // ---------------FUNCTION SEARCH ----------------



    useEffect(()=>{
        if(searchText.length == 0){
          setNotesSearch(notes)
        }
    },[searchText])


    // ----------------FUNCTION REMOVE------------------


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
  
 
    // --------------------------------- CARDS --------------------------------


      let displayNotesCard = notes.filter((note) =>{
        if (note.id_Carnet === id)
      return(
        <></>
      )
    }).filter((note) =>{
      if (searchText == "") {
        return note
      }else if (note.titre.toLowerCase().includes(searchText.toLowerCase())){
        return note
      } }).map((note, i) =>  {

      return(
          <Card className='Cards-Liste' key={'notes' + note.id}>
              <Card.Body>
              
              <li><b># : </b>{i + 1}</li>
              <li><b>Titre : </b>{note.titre}</li>
              <li><b>Catégorie : </b>{note.categorie}</li>
              <li><b>Notes : </b>{note.affnote}</li>
              <td>
                  <Button as={Link} to={'../ModifNote/' + id} variant="warning">Modifier</Button>
              </td>
              <td>
                  <Button variant="danger" onClick={() => remove(note, i)}>
                      Supprimer
                  </Button>
              </td>
              </Card.Body>
          </Card>
      )  
  })


//---------------------------------TAB-------------------------------------


  let displayNotes = notes.filter((note)=>{
    if (note.id_Carnet === id)
      return(
        <></>
      )
    }).filter((note) =>{
      if (searchText == "") {
        return note
      }else if (note.titre.toLowerCase().includes(searchText.toLowerCase())){
        return note
      } }).map((note, i) =>  {

        return(
          <>
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
          </>

          
        )
        
    })


// -------------------------- FUNCTION SWITCH + RETURN NAVBAR LISTE----------------------


const onSwitchAction = () => {
  setIsSwitchOn(!isSwitchOn)
}

if (isSwitchOn){


  return (
      <>
      <div className='ListContainer'>

  <Navbar bg="dark" variant="dark" expand="lg" className="NavList">
  <Container fluid>
            <Navbar.Brand href="#">Liste des carnets</Navbar.Brand>
                <p style={{
                  color:'black',
                  backgroundColor:'white', 
                  marginBottom:'0em',
                  padding:'0.25em',
                  borderRadius:'5px',
                }}>
                  Card / Tab
                </p>
                <Form.Switch 
                  onChange={onSwitchAction}
                  id='btnSwitch-Liste'
                  checked={isSwitchOn}
                />
            <Search handleSearchNote={setSearchText}/>
          </Container>
  </Navbar>
<Container className='tabContainer'>

      <Row style={{overflowY:'scroll'}} className='crudStuff'>
        <Col >
          <div className="mb-3">
            <Button as={Link} to={"../CreationNote/"+id}>
              Ajouter une note
            </Button>
          </div>

          <Table striped bordered hover >
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
)}

  else if(!isSwitchOn){
    return(
      <>
        <div className='ListContainer'>

          <Navbar bg="dark" variant="dark" expand="lg" className="NavList">
            <Container fluid>
            <Navbar.Brand href="#">Liste des carnets</Navbar.Brand>
                <p style={{
                  color:'black',
                  backgroundColor:'white', 
                  marginBottom:'0em',
                  padding:'0.25em',
                  borderRadius:'5px',
                }}>
                  Card / Tab
                </p>
                <Form.Switch 
                  onChange={onSwitchAction}
                  id='btnSwitch-Liste'
                  checked={isSwitchOn}
                />
            <Search handleSearchNote={setSearchText}/>
          </Container>
        </Navbar>


        <Container className='CardContainer'>
  
          <Row  className=''>
            <Col>
              <div className="mb-3">
                <Button as={Link} to={"../CreationNote"}>
                  Ajouter une note
                </Button>
              </div>
              <tbody className='tbody-Cards' style={{display:'grid', gridTemplateColumns:'33% 33% 33%',overflowY:'scroll',width:'100%', height:'100%'}}>{displayNotesCard}</tbody>
            </Col>
          </Row>
        </Container>
      </div>
    </>
)}}