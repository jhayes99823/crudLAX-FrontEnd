import React from 'react';
import { Table, Alert } from 'react-bootstrap';

import { FaTrash, FaPen } from 'react-icons/fa';
import DeleteTeamModal from '../Team/DeleteTeamModal.componenet';
import UpdateTeamModal from '../Team/UpdateTeamModal.component';

export default class TeamTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            indextodelete: -1,
            teams: []   
        }

        this.renderTeam = this.renderTeam.bind(this);
        this.deleteTeam = this.deleteTeam.bind(this);
        this.updateCell = this.updateCell.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleShowModal() {
	    this.setState({ showModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showModal: false });
	}

    deleteTeam = TID => () => {
        const url = '/api/teams';
        var params = {
            tid: TID
        }

        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        var request = new Request(url + "?" + query, {
            method: 'DELETE'
        })
        fetch(request, {
            headers: {
                'Content-Type': 'application/json'
            },
            }).then((res) => res.json())
            .then((result) => {
                <Alert variant='success'>Team Deleted Successfully!</Alert>
            },
            (err) => {
                console.log(err)
            })
        }

    updateCell = TID => () => {
        console.log('TID of cell to me updated', TID)
    }

    renderTeam(team, index) {
        return (
            <tr key={team.TID}>
                <th onDoubleClick={this.updateCell(team.TID)}>
                    {team.TeamName}
                </th>
                <th>
                   { team.TeamName}
                </th>
                <th>
                    {team.TeamName}
                </th>
                <th>
                   { team.TeamName}
                </th>
                <th>
                    {team.TeamName}
                </th>
                <th onClick={this.deleteTeam(team.TID)}>
                   <FaTrash />
                </th>
                <th>
                    <FaPen />
                </th>
            </tr>
        )
    }

    render() {
        const coachesTeams = JSON.parse(localStorage.getItem('teams'));
        const styles = {
            'left': this.props.leftperc,
            'top': this.props.topperc
        }

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Team Name
                            </th>
                            <th>
                                Head Coach
                            </th>
                            <th>
                                Record
                            </th>
                            <th>
                                Home Town
                            </th>
                            <th>
                                School
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {coachesTeams.map(this.renderTeam)}
                    </tbody>
                </Table>
            </div>
        )
    }   
}