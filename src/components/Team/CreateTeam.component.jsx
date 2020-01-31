import React from 'react';

import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';

import USState from '../../util/states';

export default class CreateTeamModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamname: '',
            isActive: '',
            coachid: 3,
            hometown: '',
            schoolname: '',
            state: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    
    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const newTeam = {
            teamname: this.state.teamname,
            isActive: true,
            coachid: this.state.coachid,
            hometown: this.state.hometown,
            schoolname: this.state.schoolname,
            state: this.state.state
        }
        fetch('/api/teams/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTeam)
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                   this.props.history.push('/coach-home')
                }
                else {
                    alert('something went wrong')
                }
            })
        }

    render() {
        return (
            <div>
                <Modal {...this.props} centered>
                    <Modal.Header centered>
                        Create New Team
                    </Modal.Header>
                    <Modal.Body>
                    <Container className="form-border centered">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formTeamname">
                                <Form.Label>Team Name</Form.Label>
                                <Form.Control name="teamname" type="text" placeholder="Enter Team Name" onChange={this.setValue} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formHometown">
                                <Form.Label>Home Town</Form.Label>
                                <Form.Control name="hometown" type="text" placeholder="Enter Home Town" onChange={this.setValue} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>

                            <Form.Group as={Col} controlId="formSchool">
                                <Form.Label>School</Form.Label>
                                <Form.Control name="school" type="text" placeholder="Enter School Name" onChange={this.setValue} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="schoolyr">
                                <Form.Label>State</Form.Label>
                                <Form.Control name="schoolyr" as="select" placeholder="Enter School Yr" onChange={this.setValue}>
                                    {USState.map((state) => <option>{state}</option>)}
                                </Form.Control>
                            </Form.Group>

       
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}