import React from 'react';
import { Modal, Form, Row, Col, Button, Container } from 'react-bootstrap';
import USState from '../../util/states';

export default class UpdateTeamModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            TeamName: '',
            isActive: true,
            HomeTown: '',
            SchoolName: '',
            State: '',
            Wins: -1,
            Loses: -1,
            Ties: -1,
            tid: -1
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    componentDidMount() {
        console.log('getting update team and loc stor', localStorage);
        const teamToUpdate = JSON.parse(localStorage.getItem('teamToUpdate'));
        console.log('team to u', teamToUpdate)
        this.setState({
            TeamName: teamToUpdate.TeamName,
            HomeTown: teamToUpdate.HomeTown,
            SchoolName: teamToUpdate.SchoolName,
            State: teamToUpdate.State,
            Wins: teamToUpdate.Wins,
            Loses: teamToUpdate.Loses,
            Ties: teamToUpdate.Ties,
            tid: teamToUpdate.TID
        })
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('state b4 send', this.state);
        fetch('/api/teams/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                   window.location.reload();
                   window.location.reload();
                }
                else {
                    alert('something went wrong')
                }
            })
        }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} centered>
                    <Modal.Header>
                        Update Team
                    </Modal.Header>
                    <Modal.Body>
                    <Container className="form-border centered">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formTeamname">
                                <Form.Label>Team Name</Form.Label>
                                <Form.Control name="TeamName" type="text" defaultValue={this.state.TeamName} onChange={this.setValue} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formHometown">
                                <Form.Label>Home Town</Form.Label>
                                <Form.Control name="HomeTown" type="text" placeholder="Enter Home Town" defaultValue={this.state.HomeTown} onChange={this.setValue} />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>

                            <Form.Group as={Col} controlId="formSchool">
                                <Form.Label>School</Form.Label>
                                <Form.Control name="SchoolName" type="text" placeholder="Enter School Name" defaultValue={this.state.SchoolName} onChange={this.setValue} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control name="State" as="select" placeholder="Enter State" defaultValue={this.state.State} onChange={this.setValue}>
                                    {USState.map((state) => <option>{state}</option>)}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="number">
                                <Form.Label>Record</Form.Label>
                                <Form.Row>
                                    <Col>
                                      <Form.Control defaultValue={this.state.Wins} name="Wins" type="number" placeholder="Enter Wins" onChange={this.setValue} min="0" />
                                    </Col>
                                    -
                                    <Col>
                                      <Form.Control defaultValue={this.state.Loses} name="Loses" type="number" placeholder="Enter Loses" onChange={this.setValue} min="0" />
                                    </Col>
                                    -
                                    <Col>
                                      <Form.Control defaultValue={this.state.Ties} name="Ties" type="number" placeholder="Enter Ties" onChange={this.setValue} min="0" />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}