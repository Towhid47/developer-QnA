import React from 'react';
import './Navigationbar.css';

//import Navbar items from React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigationbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/" className='web-title text-info fs-2'> Developer-QnA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home" className='fw-semibold text-light'>Home</Nav.Link>
                            <Nav.Link href="/topics" className='fw-semibold text-light'>Topics</Nav.Link>
                            <Nav.Link href="/statistics" className='fw-semibold text-light'>Statistics</Nav.Link>
                            <Nav.Link href="/blog" className='fw-semibold text-light'>Blog</Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
              </Navbar>
        </div>
    );
};

export default Navigationbar ;