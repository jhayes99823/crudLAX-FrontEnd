import React from 'react';
import { Modal } from 'react-bootstrap';

export default class UpdateTeamModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Modal {...this.props} centered>
                    <Modal.Header>
                        Update Team
                    </Modal.Header>
                </Modal>
            </div>
        )
    }
}