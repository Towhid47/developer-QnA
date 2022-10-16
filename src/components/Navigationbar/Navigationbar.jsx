import React from 'react';
import './Navigationbar.css';

//import Navbar items from React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Navigationbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/" className='web-title text-info fs-2'> Developer-QnA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className={`fw-semibold text-light nav-item ms-5  ${({isActive})=> isActive? "active" : undefined}`}>Home</NavLink>
                            <NavLink to="/topics" className='fw-semibold text-light nav-item ms-5'>Topics</NavLink>
                            <NavLink to="/statistics" className='fw-semibold text-light nav-item ms-5'>Statistics</NavLink>
                            <NavLink to="/blog" className='fw-semibold text-light nav-item ms-5'>Blog</NavLink>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
              </Navbar>
        </div>
    );
};

export default Navigationbar ;