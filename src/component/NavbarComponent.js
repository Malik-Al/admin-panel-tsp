import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';


function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
            <Navbar.Brand href="/">TSP Partner</Navbar.Brand>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
            </Form>
        </Container>
        </Navbar>
    </>

    
  );
}

export default NavbarComponent;