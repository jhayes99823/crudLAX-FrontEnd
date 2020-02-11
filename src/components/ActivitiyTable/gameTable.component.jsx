import React from 'react';
import { Table } from 'react-bootstrap';


export default class GameTable extends React.Component {
    constructor(props) {
        super(props);
    }

    renderGame(game, index) {
        return (
            <tr key={game.id}>
                <th>
                    {game.id}
                </th>
                <th>
                    {game.Name}
                </th>
                <th>
                    {game.StartTime}
                </th>
                <th>
                    {game.EndTime}
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Location</th>
                            <th>Win</th>
                            <th>Score</th>
                            <th>OpponentScore</th>
                            <th>OpponentName</th>
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
