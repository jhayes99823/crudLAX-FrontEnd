import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

export default class DeleteTeamModal extends React.Component {
    constructor(props) {
        super(props);

       console.log(props);
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} centered>
                <Modal.Header>
                        Are You Sure?
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Button onClick={this.deleteTeam} size="lg">Yes</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}