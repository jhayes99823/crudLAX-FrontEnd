import React from 'react';
import { withRouter } from 'react-router-dom';

import { Form, Button, Col, Container } from 'react-bootstrap';

import styles from './styles.css';
import { setUser } from '../../../contexts';

export default class CoachSignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: '',
            role: 'Coach'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    
    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        fetch('/api/users/sign-up', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                    // setUser(result.user);
                    this.props.history.push('/coach-home');
                }
                else {
                    alert('something went wrong')
                }
            })
    }

    render() {
        return(
            <div>
                <div className="label-border">
                    <h2>Sign Up As New Coach</h2>
                </div>
            <div>
                <Container className="form-border centered">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="fname" type="text" placeholder="Enter First Name" onChange={this.setValue} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lname" type="text" placeholder="Enter Last Name" onChange={this.setValue} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" type="text" placeholder="Enter Username" onChange={this.setValue} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter Password" onChange={this.setValue} />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            </div>
        )
    }
}