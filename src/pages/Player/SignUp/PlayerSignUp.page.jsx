import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';

import LabelPage from '../../../components/Label/label.component';

export default class PlayerSignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            position: '',
            username: '',
            password: '',
            number: '',
            schoolyr: '',
            role: 'P'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getSchoolYr = this.getSchoolYr.bind(this);
    }
    
    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    getPosition(pos) {
        switch(pos) {
            case 'Attacker':
                return 'A';
                break;
            case 'Midfield':
                return 'M';
            case 'Defender':
                return 'D';
                break;
            case 'Goalie':
                return 'G';
                break;
        }
    }

    getSchoolYr(yr) {
        switch(yr) {
            case 'Freshman':
                return 0;
                break;
            case 'Sophomore':
                return 1;
            case 'Junior':
                return 2;
                break;
            case 'Senior':
                return 3;
                break;
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const newPlayer = {
            fname: this.state.fname,
            lname: this.state.lname,
            position: this.getPosition(this.state.position),
            number: this.state.number,
            schoolyr: this.getSchoolYr(this.state.schoolyr),
            username: this.state.username,
            password: this.state.password,
            playable: 1,
            role: this.state.role
        }
        fetch('/api/users/signup/player', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlayer)
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                    this.props.history.push('/');
                }
                else {
                    alert('something went wrong')
                }
            })
        }

    render() {
        return(
            <div>
                <LabelPage padding="10px" text="Sign Up As Player" bcolor="grey" topperc="18%" leftperc="50%"/>
            
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

                        <Form.Row>
                            <Form.Group as={Col} controlId="position">
                                <Form.Label>Position</Form.Label>
                                <Form.Control name="position" as="select" placeholder="Enter Position" onChange={this.setValue}>
                                    <option>Attacker</option>
                                    <option>Midfield</option>
                                    <option>Defender</option>
                                    <option>Goalie</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="number">
                                <Form.Label>Number</Form.Label>
                                <Form.Control name="number" type="number" placeholder="Enter Number" onChange={this.setValue} min="0" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="schoolyr">
                                <Form.Label>School Year</Form.Label>
                                <Form.Control name="schoolyr" as="select" placeholder="Enter School Yr" onChange={this.setValue}>
                                    <option>Freshman</option>
                                    <option>Sophomore</option>
                                    <option>Junior</option>
                                    <option>Senior</option>
                                </Form.Control>
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