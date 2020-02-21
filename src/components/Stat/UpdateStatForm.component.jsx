import React from 'react';
import { Container, Form, Button, Col, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

export default class UpdateStatForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            PID: -1,
            GID: -1,
            goals: -1,
            assists: -1,
            saves: -1,
            groundballs: -1,
            faceoffsuccess: -1,
            faceofftotal: -1,
            passSuccess: -1,
            passtotal: -1,
            forcedTurnover: -1,
            games: []

        }

        console.log('mounting create stat form')

        // const arr = createOpponentArray(this.games)

        this.setValue = this.setValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const newStat = {
            PID: this.state.PID,
            GameID: this.state.GID,
            goals: this.state.goals,
            assists: this.state.assists,
            saves: this.state.saves,
            forcedTurnover: this.state.forcedTurnover,
            groundBall: this.state.groundballs,
            faceOffSuccess: this.state.faceoffsuccess,
            totalFaceoff: this.state.faceofftotal,
            passSuccess: this.state.passSuccess,
            totalPass: this.state.passtotal
        }

        console.log('stat: ', this.newStat)

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
                 alert('stat was not updated properly')
             }
        })
    }

    render() {
        return (
            <div>

                    <Container className="form-border centered">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group></Form.Group>
                                <Form.Group controlId="formPID">
                                <Form.Label>Enter PlayerID</Form.Label>
                                    <Form.Control name="PID" type="number" placeholder="Enter Player ID" onChange={this.setValue} />
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid PlayerID.
                                </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group></Form.Group>
                                <Form.Group controlId="formGame">
                                <Form.Label>Enter PlayerID</Form.Label>
                                    <Form.Control name="GID" type="number" placeholder="Enter GameID" onChange={this.setValue} />
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid GameID.
                                </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

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
                                <Form.Control name="forcedTurnover" type="number" placeholder="0" required onChange={this.setValue}/>
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
                                </Form.Row>

                            <Form.Row>
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
                        </Form>
                    </Container>
            </div>
        )
    }
}