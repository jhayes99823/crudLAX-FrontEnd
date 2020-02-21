import React from 'react';
import { Modal } from 'react-bootstrap';
import StatGameTable from '../StatTable/StatTableForGame.component';

export default class ViewTeamModal extends React.Component {
    constructor(props) {
        super(props);
        this.GID = JSON.parse(localStorage.getItem('GID'));

        this.state = {
            stats: [],
            statid: this.GID
        }
        this.TID = JSON.parse(localStorage.getItem('moreInfoTeam'));
        localStorage.removeItem('GID');
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        this.setState({
            stats: []
        })
    }

    fetchData() {
        
    }


    render() {
        return (
            <div>
                <Modal size="lg" show={this.props.show} onHide={this.props.onHide} centered>
                <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <StatGameTable statmap={this.state.stats} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

}