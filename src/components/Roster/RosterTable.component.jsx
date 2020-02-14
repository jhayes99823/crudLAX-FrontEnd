import React from 'react';
import { Table } from 'react-bootstrap';
import logic from '../../util/logic';
import { FaTrash, FaPen } from 'react-icons/fa';
import { queryBuilder } from '../../util/query-builder';

export default class RosterTable extends React.Component {
    constructor(props) {
        super(props);

        this.renderPlayer = this.renderPlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
        console.log('roster table props', this.props)
    }

    deletePlayer = UID => () => {
        var deletePlayerFromRosterReq = queryBuilder('/api/team/full-roster', { tid: this.props.tid, uid: UID }, 'DELETE');
        
        fetch(deletePlayerFromRosterReq, {
            headers: {
                'Content-Type': 'application/json'
            },
            }).then((res) => res.json())
            .then((result) => {
                if (result.success == true) {
                    window.location.reload();
                } else {
                    this.setState({
                        ErrorCode: result.ErrorCode
                    })
                }
            },
            (err) => {
                alert(err);
            })
    }

    renderPlayer(player, index) {
        console.log('player being built', player);
        return (
            <tr key={player.UID}>
                <th>{logic.concatName(player.Fname, player.Lname)}</th>
                <th>{player.Position}</th>
                <th>{player.SchoolYear}</th>
                <th>{player.Number}</th>
                <th>{!player.Playable}</th>
                <th onClick={this.deletePlayer(player.UID)}>
                   <FaTrash />
                </th>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Position</th>
                            <th>School Year</th>
                            <th>Number</th>
                            <th>Injured?</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.players == [] ? <tr></tr> : this.props.players.map(this.renderPlayer)}
                    </tbody>
                </Table>
            </div>
        )
    }
}