import {Container, Row, Col, Button, Table, Card, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../style/Liste.css'
import '../style/App.css'



export default function Liste (){

  const {id} = useParams()
  const [carnets, setCarnets] = useState([])
  const [isSwitchOn, setIsSwitchOn] = useState({})
    

  //-------------LOCAL STORAGE---------------


    useEffect(() =>{
        let datas = localStorage.getItem('Piscine-Carnet')
        ? localStorage.getItem('Piscine-Carnet')
        :[]
        datas = JSON.parse(datas)
        setCarnets(datas)
    }, [])

    //-----------FUNCTION REMOVE------------

    function remove(carnet, i){
        let rep = window.confirm(
            `Êtes-vous sûr de vouloir supprimer le carnet suivant ? : ${carnet.titre}`
        )
        if (rep){
            let tmp = [...carnets]
            tmp.splice(i, 1)
            setCarnets(tmp)
            localStorage.setItem('Piscine-Carnet', JSON.stringify(tmp))
        }
    }
    

    //-------------RETURN CARNET CARDS-------------


    let displayCarnetsCard = carnets.map((carnet, i) => {
      return(
          <Card style={{marginBottom:'15px', marginLeft:'10px'}} key={'carnets' + carnet.id}>
              <Card.Body>
              
              <li><b># : </b>{i + 1}</li>
              <li><b>Titre : </b>{carnet.titre}</li>
              <li><b>Catégorie : </b>{carnet.categorie}</li>
              <td>
                <Button as={Link} to={'../ListeCarnetNote/' + carnet.id}>Observer</Button>
              </td>
              <td>
                  <Button as={Link} to={'../ModifCarnet/' + carnet.id} variant="warning">Modifier</Button>
              </td>
              <td>
                  <Button variant="danger" onClick={() => remove(carnet, i)}>
                      Supprimer
                  </Button>
              </td>
              </Card.Body>
          </Card>
      )  
    })


    //-------------RETURN TABLEAU-------------


    let displayCarnets = carnets.map((carnet, i) => {
      return(
        <>
          <tr key={'Carnet-' + carnet.id}>
              <td>{i + 1}</td>
              <td>{carnet.titre}</td>
              <td>{carnet.categorie}</td>
              <td>
                <Button as={Link} to={'../ListeCarnetNote/' + carnet.id}>Observer</Button>
              </td>
              <td>
                  <Button as={Link} to={'../ModifCarnet/' + carnet.id} variant="warning">Modifier</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => remove(carnet, i)}>
                    Supprimer
                </Button>
              </td>
            </tr>
          </>
        )
    })

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
              </Container>
            </Navbar>
            <Container className='tabContainer'>
              <Row style={{overflowY:'scroll'}} className='crudStuff'>
                <Col>
                  <div className="mb-3">
                    <Button as={Link} to={"../CreationCarnet"}>
                      Ajouter un Carnet
                    </Button>
                  </div>
                  <Table striped bordered hover >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Titre du carnet</th>
                        <th>Categorie</th>
                        <th>Notes</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                      </tr>
                    </thead>
                    <tbody>{displayCarnets}</tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) 
    }


// ------------------RETURN CARDS------------------


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
              </Container>
            </Navbar>


            <Container className='CardContainer'>
              <Row className=''>
                <Col>
                  <div className="mb-3">
                    <Button as={Link} to={"../CreationCarnet"}>
                      Ajouter un Carnet
                    </Button>
                  </div>
                  <tbody style={{
                    display:'grid', 
                    gridTemplateColumns:'30% 30% 30%',
                    overflowY:'scroll', 
                    width:'138%', 
                    height:'75%'
                  }}>
                    {displayCarnetsCard}
                  </tbody>        
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )
    }
}
      
    


  