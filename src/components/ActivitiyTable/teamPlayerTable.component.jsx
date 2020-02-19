import React from 'react';
import { Table } from 'react-bootstrap';
import logic from '../../util/logic';
export default class TeamPlayerTable extends React.Component{
    constructor(props) {
        super(props);
    }

    renderTeam(team, index){
        return(
                
                <tr key={team.id}>
                    <th>
                        {team.TeamName}
                    </th>
                    <th>
                        {team.CoachID }
                    </th>
                    <th>
                        {team.Wins}  
                    </th>
                    <th>
                        {team.Loses} 
                    </th>
                    <th>
                        {team.Ties}
                    </th>
                    <th>
                        {team.HomeTown}
                    </th>
                    <th>
                        {team.SchoolName}
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
                            <th>Team Name</th>
                            <th>HeadCoach</th>
                            <th> Wins</th>
                            <th> Loses</th>
                            <th> Ties</th>
                            <th>HomeTown</th>
                            <th>School</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.teams == [] ? <tr></tr> : this.props.teams.map(this.renderTeam)}
                    </tbody>
                </Table>
            </div>
        )
    }




}