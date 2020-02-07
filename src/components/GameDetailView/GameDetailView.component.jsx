import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import LabelPage from '../Label/label.component';

export default class GameDetailView extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} centered>
                    <Modal.Header centered>
                        Game Detail View
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <LabelPage text='Roster' bcolor='grey' />
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}