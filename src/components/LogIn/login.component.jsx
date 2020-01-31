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
        this.onSubmit = this.onSubmit.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    username(event) {
        this.setState({ username: event.target.value })
    }

    password(event) {
        this.setState({ password: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                    localStorage.setItem('loggedIn', result.user);
                    this.props.history.push('/player-home');
                }
                else {
                    alert('something went wrong')
                }
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
                <Form onSubmit={this.login}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter Password" />
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