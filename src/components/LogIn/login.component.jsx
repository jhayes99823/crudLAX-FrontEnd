import React from 'react';
import { Button, Form } from 'react-bootstrap';
import UserTypeModal from '../Modal/modal.component';

import styles from './styles.css';

export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isCoach: this.props.isCoach,
            showModal: false,
        }

        this.password = this.password.bind(this);
        this.username = this.username.bind(this);
        this.login = this.login.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    username(event) {
        this.setState({ username: event.target.value })
    }

    password(event) {
        this.setState({ password: event.target.value })
    }

    login(event) {
        fetch('/api/users/sign-up', {
            method: 'post',
            headers: {
                'Accept': 'application/json',  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                isCoach: this.state.isCoach
            })
            .then((res) => res.json())
            .then((results) => {
                console.log(results);
            })
        })
    }

    handleShowModal() {
	    this.setState({ showModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showModal: false });
	}

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="divider one-line line"><span>or</span></div>
                <Button onClick={this.handleShowModal}>Sign Up</Button>
                <UserTypeModal show={this.state.showModal} onHide={this.handleCloseModal} />
            </div>
        )
    }
}