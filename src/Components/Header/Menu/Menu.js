import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Menu = () => {
    return (
        <Container  fluid className="p-0">
            <Navbar fixed="top" className="theme-color" expand="lg">
                <Navbar.Brand href="#home">Md Rokybul Hasan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-black">
                        <Nav.Link href="#home">About me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#link">Education</Nav.Link>
                        <Nav.Link href="#contact">Contact me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menu;