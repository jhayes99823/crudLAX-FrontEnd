import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import LabelPage from '../Label/label.component';
import StatTableForGame from '../StatTable/StatTableForGame.component';

export default class GameDetailView extends React.Component {
    constructor(props) {
        super(props);
        const TeamID = JSON.parse(localStorage.getItem(''));
        const GameID = JSON.parse(localStorage.getItem('loggedIn'));
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
                                <StatTableForGame TID = {this.TeamID} GID = {this.GameID}/>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}