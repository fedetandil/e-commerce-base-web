import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo/eshopsmall.png' // relative path to image

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="90"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="televisores">Televisores</Nav.Link>
                        <Nav.Link href="notebooks-y-tablets">Notebooks y Tablets</Nav.Link>
                        <Nav.Link href="celulares">Celulares</Nav.Link>
                    </Nav>
                    <Button variant='light' style={{marginRight : 10}}>Register</Button>
                    <Button variant='light'>Login</Button>
                </Container>

            </Navbar>
        </>
    );
}

export default ColorSchemesExample;
