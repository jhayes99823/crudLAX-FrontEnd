// popup modal from login/signup page for saying wether they are coach or player to send them to correct signup page
import React from 'react';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

export default class UserTypeModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal {...this.props} centered>
                    <Modal.Header>
                        Are You A Coach Or A Player?
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Button href="/signup/coach" size="lg">Coach</Button>
                                </Col>
                                <Col>
                                    <Button href="/signup/player" size="lg">Player</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}