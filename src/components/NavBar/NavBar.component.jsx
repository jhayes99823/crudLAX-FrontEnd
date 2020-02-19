import React from 'react';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import styles from './styles.css';

export default class NavBar extends React.Component {
    render() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
        console.log('loggedUser', loggedUser);
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">c.r.u.dLAX</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href={(loggedUser == null) ? "/" : ((loggedUser.Role == 'P') ? '/player-home' : '/coach-home')}>Home</Nav.Link>
                    <Nav.Link href={loggedUser == null? "/" : "/player/profile"}>Profile</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}