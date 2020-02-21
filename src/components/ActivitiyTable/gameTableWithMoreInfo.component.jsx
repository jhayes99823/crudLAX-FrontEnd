import React from 'react';
import { Table } from 'react-bootstrap';
import logic from '../../util/logic';
import { Button } from 'react-bootstrap';
import {queryBuilder} from '../../util/query-builder.js';
import StatGameTable from '../../../components/StatTable/StatTableForAverage.component';



export default class GameTableWithMoreInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: [],
            showStatModal: false
        }

        this.showStatModal = this.showStatModal.bind(this)
        this.showOnClickStatModal = this.showOnClickStatModal.bind(this)
        this.closeStatModal = this.closeStatModal.bind(this)

        this.renderGame = this.renderGame.bind(this)
    }

    showStatModal() {
        this.setState({ showStatModal: true });
    }

    showOnClickStatModal() {
        localStorage.setItem('GID', id)
        this.setState({ showStatModal: true });
    }
    
	closeStatModal() {
		this.setState({ showStatModal: false });
    }

    renderGame(game, index) {
        return (
            <tr key={game.id}>
                <th>
                    {game.Name}
                </th>
                <th>
                    {logic.formatDateTime(game.StartTime)}
                </th>
                <th>
                    {logic.formatDateTime(game.EndTime)}
                </th>
                <th>
                    {game.Location}
                </th>
                <th>
                    {game.win}
                </th>
                <th>
                    {game.score}
                </th>
                <th>
                    {game.OpponentScore}
                </th>
                <th>
                    {game.OpponentName}
                </th>
                <th>
                    <Button onClick={this.showOnClickStatModal(game.id)}>More Info</Button>
                </th>
            </tr>
        )
    }

    render() {
        const styles = {
            'left': this.props.leftperc,
            'top': this.props.topperc
        }
            console.log(this.props.games)
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Location</th>
                            <th>Win</th>
                            <th>Score</th>
                            <th>OpponentScore</th>
                            <th>OpponentName</th>
                            <th>More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.games == [] ? <tr></tr> : this.props.games.map(this.renderGame)}
                    </tbody>
                </Table>
            </div>
        )
    }
}


// WEBPACK FOOTER //
// src/components/ActivitiyTable/gameTable.component.jsx
