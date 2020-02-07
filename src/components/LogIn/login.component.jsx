import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import UserTypeModal from '../Modal/modal.component';

import styles from './styles.css';
import { Alert } from 'react-bootstrap';

export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isCoach: this.props.isCoach,
            showModal: false,
            showAlert: false
        }

        console.log(this.props)

        this.setValue = this.setValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    showAlert() {
        this.setState({ showAlert: true });
    }

    closeAlert() {
        this.setState({ showAlert: false });
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        const url = 'api/users/login';
        var params = {
            username: this.state.username,
            password: this.state.password
        }

        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        var request = new Request(url + "?" + query, {
            method: 'GET'
        })

        event.preventDefault();
        fetch(request, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                    console.log('putting in user', result.user)
                    localStorage.setItem('loggedIn', JSON.stringify(result.user[0]));
                    if (result.user.Role == 'P') {
                        this.props.history.push('/player-home');
                    } else {
                        this.props.history.push('/coach-home');
                    }
                }
                else {
                    console.log('triny to show alert');
                    this.showAlert();
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
                <Alert show={this.state.showAlert} onClose={this.closeAlert} dismissable variant='danger'>Incorrect Password. Please Try Again.</Alert>
                <Container>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group></Form.Group>
                        <Form.Group controlId="formUsername">
                            <Form.Control name="username" type="text" placeholder="Enter Username" onChange={this.setValue} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control name="password" type="password" placeholder="Enter Password" onChange={this.setValue} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className="divider one-line line"><span>or</span></div>
                    <Button onClick={this.handleShowModal}>Sign Up</Button>
                    <UserTypeModal show={this.state.showModal} onHide={this.handleCloseModal} />
                </Container>
            </div>
        )
    }
}