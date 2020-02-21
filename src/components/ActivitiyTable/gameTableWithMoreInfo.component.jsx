import React from 'react';
import { Table } from 'react-bootstrap';
import logic from '../../util/logic';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class GameTableWithMoreInfo extends React.Component {
    constructor(props) {
        super(props);

        this.renderGame = this.renderGame.bind(this)
    }

    moreInfoGamePage = GID => () => {
        localStorage.setItem('moreGameInfo', GID);
        this.props.history.push('/coach/game-info');
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
                    <Button onClick={this.moreInfoGamePage(game.id)}>More Info</Button>
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

export default withRouter(GameTableWithMoreInfo);

// WEBPACK FOOTER //
// src/components/ActivitiyTable/gameTable.component.jsx
