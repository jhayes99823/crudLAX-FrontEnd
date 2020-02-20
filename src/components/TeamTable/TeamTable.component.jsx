import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';

import { FaTrash, FaPen } from 'react-icons/fa';
import UpdateTeamModal from '../Team/UpdateTeamModal.component';
import logic from '../../util/logic';
import { queryBuilder, ErrorMapper } from '../../util/query-builder';
import { withRouter } from 'react-router-dom';

class TeamTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = { //
            showUpdateModal: false,
            indextodelete: -1,
            showAlert: false,
            showDeleteSuccess: false,
            ErrorCode: 0
        }

        this.teamToUpdate = {};
    
        this.renderTeam = this.renderTeam.bind(this);
        this.deleteTeam = this.deleteTeam.bind(this);
        this.moreInfoTeamPage = this.moreInfoTeamPage.bind(this);
        this.updateCell = this.updateCell.bind(this); // make sure to add to modal
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    handleShowModal() {
	    this.setState({ showUpdateModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showUpdateModal: false });
    }
    
    showAlert() {
        this.setState({ showAlert: true });
    }

    closeAlert() {
        this.setState({ showAlert: false });
    }

    showDeleteAlert() {
        this.setState({ showDeleteSuccess: true });
    }

    closeDeleteAlert() {
        this.setState({ showDeleteSuccess: false });
    }

    deleteTeam = TID => () => {

        var deleteTeamReq = queryBuilder('/api/team', { tid: TID }, 'DELETE');
        
        fetch(deleteTeamReq, {
            headers: {
                'Content-Type': 'application/json'
            },
            }).then((res) => res.json())
            .then((result) => {
                if (result.success == true) {
                    this.showDeleteAlert()
                    window.location.reload();
                } else {
                    this.setState({
                        ErrorCode: result.ErrorCode
                    })
                    this.showAlert();
                }
            },
            (err) => {
                alert(err);
            })
        }
        
        // when cell is double clicked it stores the team that 
        // is to be updated and shows 
        // shows the modal
    updateCell = TID => () => {
        this.teamToUpdate = this.props.teams.filter(team => team.TID === TID)[0];
        localStorage.setItem('teamToUpdate', JSON.stringify(this.teamToUpdate));
        this.handleShowModal();
    }

    moreInfoTeamPage = TID => () => {
        localStorage.setItem('moreInfoTeam', TID);
        this.props.history.push('/coach/team-info');
    }

    renderTeam(team, index) {
        console.log('team in render team', team);
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
                   {team.HomeTown}
                </th>
                <th>
                    {team.SchoolName}
                </th>
                <th>
                    <Button onClick={this.moreInfoTeamPage(team.TID)}>More Info</Button>
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
                <Alert show={this.state.showDeleteSuccess} onClose={this.closeDeleteAlert} dismissable variant='success'>Team Deleted Successfully!</Alert>
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

export default withRouter(TeamTable);