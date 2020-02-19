import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

export default class CreateStatForm extends React.Component {
    constructor(props) {
        super(props);

        this.setValue = this.setValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const newStat = {}

        fetch('/api/stat/create-stat', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStat)
        }).then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group></Form.Group>
                        <Form.Group controlId="formUsername">
                            <Form.Control name="Player Username" type="text" placeholder="Enter Player Username" onChange={this.setValue} />
                        </Form.Group>

                        <Form.Group controlId="Form.ControlSelect">
                        <Form.Label>Select Game</Form.Label>
                        <Form.Control as="select">
                        {this.props.game == [] ? <tr></tr> : this.props.game.map(this.renderGame)}
                        </Form.Control>
                        </Form.Group>

                        <Form.Row>
                        <Form.Group as={Col} md="2" controlId="validationCustom00">
                        <Form.Label>Goals</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Goals.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label>Assists</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Assist.
                        </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group as={Col} md="2" controlId="validationCustom02">
                        <Form.Label>Forced Turnover</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Forced Turnover.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom03">
                        <Form.Label>Saves</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Save.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom04">
                        <Form.Label>Groundballs</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Groundball.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom05">
                        <Form.Label>Faceoff Success</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Faceoff Success.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom06">
                        <Form.Label>FaceOff Total</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a Faceoff Total.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom07">
                        <Form.Label>Pass Total</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a Pass Total.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom08">
                        <Form.Label>Pass Success</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a Pass Success.
                        </Form.Control.Feedback>
                        </Form.Group>
                        
                        </Form.Row>
    
                        <Button variant="primary" type="submit">
                            Enter Stat
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

