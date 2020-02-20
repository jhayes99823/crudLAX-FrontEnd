import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import logic from '../../util/logic';

export default class CreateGameModal extends React.Component {
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
            tid: this.props.tid,
            oppscore: -1,
            score: -1,
            oppname: '',
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
            starttime: logic.fixDateAndTime(this.state.startdate, this.state.starttime),
            endtime: logic.fixDateAndTime(this.state.enddate, this.state.endtime),
            win: logic.calculateWin(this.state.score, this.state.oppscore),
            score: this.state.score,
            oppscore: this.state.oppscore,
            oppName: this.state.oppname,
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
                                        <Col>
                                            <Form.Label>Opponent Name</Form.Label>
                                            <Form.Control name="oppname" type="text" onChange={this.setValue} />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Your Score</Form.Label>
                                            <Form.Control name="score" type="number" min='0' onChange={this.setValue} />
                                        </Col>
                                        <Col>
                                            <Form.Label>Opponent Score</Form.Label>
                                            <Form.Control name="oppscore" type="number" min='0' onChange={this.setValue} />
                                        </Col>
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