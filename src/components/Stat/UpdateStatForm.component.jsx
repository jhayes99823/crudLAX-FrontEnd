import React from 'react';
import { Container, Form, Button, Col, Modal } from 'react-bootstrap';
import { FaTrash, FaPen } from 'react-icons/fa';

export default class CreateStatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            game: '',
            goals: '',
            assists: '',
            saves: '',
            groundballs: '',
            faceoffsuccess: '',
            faceofftotal: '',
            passSuccess: '',
            passtotal: ''

        }

        this.setValue = this.setValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const newStat = {
            username: this.state.username,
            game: this.state.game,
            goals: this.state.goals,
            assists: this.state.assists,
            saves: this.state.saves,
            groundballs: this.state.groundballs,
            faceoffsuccess: this.state.faceoffsuccess,
            faceofftotal: this.state.faceofftotal,
            passSuccess: this.state.passSuccess,
            passtotal: this.state.passtotal
        }

        fetch('/api/stat/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStat)
        }).then((res) => res.json())
        .then((result) => {
            console.log(result);
            if (result.success == true) {
                window.location.reload();
             }
             else {
                 alert('stat was not created properly')
             }
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} centered>
                    <Modal.Header centered>
                        Create A New Stat
                    </Modal.Header>
                    <Modal.Body>
                    <Container>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group></Form.Group>
                            <Form.Group controlId="formUsername">
                                <Form.Control name="username" type="text" placeholder="Enter Player Username" onChange={this.setValue} />
                            </Form.Group>

                            <Form.Group controlId="Form.ControlSelect">
                            <Form.Label>Select Game</Form.Label>
                            <Form.Control name="game" as="select" onChange={this.setValue}>
                            {this.props.game == [] ? <tr></tr> : this.props.game.map(this.renderGame)}
                            </Form.Control>
                            </Form.Group>

                            <Form.Row>
                            <Form.Group as={Col} md="2" controlId="formGoal">
                            <Form.Label>Goals</Form.Label>
                            <Form.Control name="goals" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Goals.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formAssists">
                            <Form.Label>Assists</Form.Label>
                            <Form.Control name="assists" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Assist.
                            </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group as={Col} md="2" controlId="formForcedTurnover">
                            <Form.Label>Forced Turnover</Form.Label>
                            <Form.Control name="forcedturnover" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Forced Turnover.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formSaves">
                            <Form.Label>Saves</Form.Label>
                            <Form.Control name="saves" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Save.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formGroundballs">
                            <Form.Label>Groundballs</Form.Label>
                            <Form.Control name="groundballs" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Groundball.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formFaceoffSuccess">
                            <Form.Label>Faceoff Success</Form.Label>
                            <Form.Control name="faceoffsuccess" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Faceoff Success.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formFaceofftotal">
                            <Form.Label>FaceOff Total</Form.Label>
                            <Form.Control name="faceofftotal" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Faceoff Total.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formPassSuccess">
                            <Form.Label>Pass Success</Form.Label>
                            <Form.Control name="passSuccess" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Pass Success.
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="formPassTotal">
                            <Form.Label>Pass Total</Form.Label>
                            <Form.Control name="passtotal" type="number" placeholder="0" required onChange={this.setValue}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Pass Total.
                            </Form.Control.Feedback>
                            </Form.Group>
                            
                            </Form.Row>
        
                            <Button variant="primary" type="submit">
                                Update Stat For Player
                            </Button>

                            <Button variant="" type="">
                                <FaTrash />
                            </Button>

                        </Form>
                    </Container>
                </Modal.Body>
                </Modal>
            </div>
        )
    }
}

