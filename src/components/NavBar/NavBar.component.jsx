import React from 'react';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import styles from './styles.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">c.r.u.dLAX</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Profile</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}