import React from 'react';

//import Navbar items from React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigationbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/home">Developer QnA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/topics">Topics</Nav.Link>
                            <Nav.Link href="/statistics">Statistics</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
              </Navbar>
        </div>
    );
};

export default Navigationbar ;