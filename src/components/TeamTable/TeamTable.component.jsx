import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';

import { FaTrash, FaPen } from 'react-icons/fa';
import UpdateTeamModal from '../Team/UpdateTeamModal.component';
import logic from '../../util/logic';

export default class TeamTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showUpdateModal: false,
            indextodelete: -1,
        }

        this.teamToUpdate = {};
    
        this.renderTeam = this.renderTeam.bind(this);
        this.deleteTeam = this.deleteTeam.bind(this);
        this.updateCell = this.updateCell.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleShowModal() {
	    this.setState({ showUpdateModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showUpdateModal: false });
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
                window.location.reload();
                <Alert variant='success'>Team Deleted Successfully!</Alert>
            },
            (err) => {
                console.log(err)
            })
        }

    updateCell = TID => () => {
        this.teamToUpdate = this.props.teams.filter(team => team.TID === TID)[0];
        this.handleShowModal();
    }

    renderTeam(team, index) {
        return (
            <tr key={team.TID} onDoubleClick={this.updateCell(team.TID)}>
                <th>
                    {team.TeamName}
                </th>
                <th>
                   { team.TeamName}
                </th>
                <th>
                    {logic.make_record(team.Wins, team.Loses, team.Ties)}
                </th>
                <th>
                   { team.HomeTown}
                </th>
                <th>
                    {team.SchoolName}
                </th>
                <th>
                    <Button>More Info</Button>
                </th>
                <th onClick={this.deleteTeam(team.TID)}>
                   <FaTrash />
                </th>
            </tr>
        )
    }

    render() {
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
                            <th>More Info</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.teams == [] ? <tr></tr> : this.props.teams.map(this.renderTeam)}
                    </tbody>
                </Table>
                <UpdateTeamModal updateTeam={this.teamToUpdate} show={this.state.showUpdateModal} onHide={this.handleCloseModal} />
            </div>
        )
    }   
}