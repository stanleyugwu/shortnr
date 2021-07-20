import React from 'react';
import {Form, FormControl, Button, ListGroup, ListGroupItem, Accordion, AccordionToggle} from 'react-bootstrap';

const Landing = (props) => {
    return (
        <main className="row">
            <div className="text-center col-12">
                <h2 className="mb-0">Welcome to Shortnr</h2>
                <p className="mt-0">Your Saucy URL-Shortner</p>
            </div>

            <Form className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mt-4">
                <FormControl type="text" placeholder="Paste Link to Shorten.." className="p-3 rounded-0"/>
                <Button variant="primary" className="col-10 col-md-6 mx-auto d-block py-2 mt-3">Shorten</Button>
            </Form>

            <ListGroup className="mt-4">
                <ListGroupItem>
                    HEllo
                </ListGroupItem>
                <ListGroupItem>
                    HEllo
                </ListGroupItem>
                <ListGroupItem>
                    HEllo
                </ListGroupItem>
            </ListGroup>
        </main>
    )
}

export default Landing