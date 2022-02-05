import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/ListeCarnet.css'
import {Card, Button, Input, ListGroupItem, ListItem, ListGroup, Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



const ListeCarnetNotes = () => {
    return (
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
          
        </div>
    );
};

export default ListeCarnetNotes;