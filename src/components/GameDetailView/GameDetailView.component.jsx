import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import LabelPage from '../Label/label.component';
import StatTableForGame from '../StatTable/StatTableForGame.component';
import logic from '../../util/logic'

export default class GameDetailView extends React.Component {
    constructor(props) {
        super(props);
        console.log('yolas')
        this.TeamID = JSON.parse(localStorage.getItem('Teams'));
        this.GameID = JSON.parse(localStorage.getItem('Activities'));
        console.log('yolo')
        const res = logic.createPairList(this.TeamID, this.GameID)
        console.log('mapping two lists', res)
    }

    
    
    render() {
        return (
            <div>
                <Modal size = 'lg' show={this.props.show} onHide={this.props.onHide} centered>
                    <Modal.Header centered>
                        Game Detail View
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <LabelPage text='Game Stats' bcolor='grey' />
                                <StatTableForGame TID = {this.TeamID} GID = {this.GameID}/>
                                {console.log(this.TeamID)}
                                {console.log(this.GameID)}
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}