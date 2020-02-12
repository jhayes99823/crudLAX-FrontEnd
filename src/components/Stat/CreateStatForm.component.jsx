import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

export default class CreateStatForm extends React.Component {
    constructor(props) {
        super(props);

        this.setValue = this.setValue.bind(this);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
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
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Row>
                        <Form.Group as={Col} md="2" controlId="validationCustom00">
                        <Form.Label>Goals</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label>Assists</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
                        </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group as={Col} md="2" controlId="validationCustom02">
                        <Form.Label>Forced Turnover</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom03">
                        <Form.Label>Saves</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom04">
                        <Form.Label>Ground Balls</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom05">
                        <Form.Label>FaceOff Percentage</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom06">
                        <Form.Label>Pass Percentage</Form.Label>
                        <Form.Control type="number" placeholder="0" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter an integer
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

