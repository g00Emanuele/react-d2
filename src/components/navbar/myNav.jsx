import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navLinks } from '../../data/myNavLinks';
import { nanoid } from 'nanoid';


class MyNav extends Component {
    render() {
        return (
            <>
                <Navbar expand="lg" className='bg-body-tertiary'>
                    <Container>
                        <Navbar.Brand href="#">{this.props.title}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {navLinks.map((link) => {
                                    return <Nav.Link key={nanoid()} href={`${link.href}`}>
                                        {link.name}
                                    </Nav.Link>
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default MyNav