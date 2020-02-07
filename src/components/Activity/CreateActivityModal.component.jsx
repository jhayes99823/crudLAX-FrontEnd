import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import logic from '../../util/logic';

export default class CreateActivityModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            startdate: '',
            enddate: '',
            starttime: '',
            endtime: '',
            coachid: this.props.coachid,
            teamact: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
        this.fixDateAndTime = this.fixDateAndTime.bind(this);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    fixDateAndTime(date, time) {
        return date + ' ' + time;
    }

    onSubmit(event) {
        event.preventDefault();
        const actTeam = logic.findObjectByKey(this.props.teams, 'TeamName', this.state.teamact);
        console.log(actTeam.TID);
        const newAct = {
            name: this.state.name,
            location: this.state.location,
            coachID: this.props.coachid,
            teamID: actTeam.TID,
            starttime: this.fixDateAndTime(this.state.startdate, this.state.starttime),
            endtime: this.fixDateAndTime(this.state.enddate, this.state.endtime),
            win: 1,
            oppScore: 100,
            score: 100,
            oppName: 'fixed',
        }

        console.log(newAct);

        fetch('/api/activity/create/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAct)
        }).then((res) => res.json())
        .then((result) => {
            console.log(result);
                if (result.success == true) {
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
                    <Modal.Header centered>
                        Create Activity Modal
                    </Modal.Header>
                    <Modal.Body>
                        <Container className="form-border centered">
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control name="name" placeholder="Activity Name" type="text" onChange={this.setValue} />
                                        </Col>
                                        <Col>
                                            <Form.Control name="location" placeholder="Activity Location" type="text" onChange={this.setValue} />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Start Date</Form.Label>
                                            <Form.Control name="startdate" type="date" onChange={this.setValue} />
                                        </Col>
                                        <Col>
                                            <Form.Label>Start Time</Form.Label>
                                            <Form.Control name="starttime" type="time" onChange={this.setValue} />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control name="enddate" type="date" onChange={this.setValue} />
                                        </Col>
                                        <Col>
                                            <Form.Label>End Time</Form.Label>
                                            <Form.Control name="endtime" type="time" onChange={this.setValue} />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control name="teamact" as="select" onChange={this.setValue}>
                                        {this.props.teams == null ? <option></option> : this.props.teams.map((team) => <option>{team.TeamName}</option>)}
                                    </Form.Control>
                                </Form.Group>
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