import React from 'react';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import styles from './styles.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu dapibus nisl. Aliquam feugiat, metus vel consectetur tincidunt, elit libero efficitur lacus, a tincidunt odio augue sit amet nisl. Suspendisse at velit vitae neque suscipit finibus vel et purus. Mauris pulvinar libero in est porta, ornare interdum ante interdum. Nunc ultrices gravida justo a feugiat. Vivamus ut tellus quis nisi lacinia viverra. Sed eget interdum lectus, vel viverra orci. Maecenas feugiat laoreet massa. Sed eget laoreet neque. Nam id tellus aliquam, euismod magna eget, feugiat lorem. Donec volutpat quis odio eget egestas.</p>
                <button className="button-style">Click Me</button>
            </div>
        )
    }
}