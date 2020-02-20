import React from 'react';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import styles from './styles.css';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(loggedUser) {
        localStorage.removeItem('loggedIn');
        this.props.history.push('/');
    }

    render() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
        console.log('loggedUser', loggedUser);
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">c.r.u.dLAX</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href={(loggedUser == null) ? "/" : ((loggedUser.Role == 'P') ? '/player-home' : '/coach-home')}>Home</Nav.Link>
                    <Nav.Link href={loggedUser == null? "/" : ((loggedUser.Role == 'P') ? '/player/profile' : '/coach-home')}>Profile</Nav.Link>
                    </Nav>
                    <Button variant="light" type="button" onClick={this.logout}>Logout</Button>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(NavBar)