import React from 'react';
import { Modal, Form, Col, Container, Button } from 'react-bootstrap';
import logic from '../../util/logic';

export default class CreatePracticeModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            startdate: '',
            enddate: '',
            starttime: '',
            endtime: '',
            drills: '',
            coachid: this.props.coachid,
            tid: this.props.tid,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const newAct = {
            name: this.state.name,
            location: this.state.location,
            coachID: this.props.coachid,
            teamID: this.props.tid,
            startTime: logic.fixDateAndTime(this.state.startdate, this.state.starttime),
            endTime: logic.fixDateAndTime(this.state.enddate, this.state.endtime),
            drills: this.state.drills
        }

        fetch('/api/activity/create/practice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAct)
        }).then((res) => res.json())
        .then((result) => {
            if (result.success) {
                window.location.reload();
            } else {
                alert('something went wrong');
            }
        })
    }

    render() {
        return(
            <div>
                 <Modal show={this.props.show} onHide={this.props.onHide} centered>
                    <Modal.Header centered>
                        Create Game Modal
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
                                        <Form.Row>
                                            <Form.Label>Drills To Do</Form.Label>
                                            <Form.Control name="drills" type="text" onChange={this.setValue} />
                                        </Form.Row>
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