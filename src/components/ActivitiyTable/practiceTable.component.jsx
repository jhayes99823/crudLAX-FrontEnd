import React from 'react';
import { Table, Button } from 'react-bootstrap';
import GameDetailView from '../GameDetailView/GameDetailView.component';
import logic from '../../util/logic';

//this displays the player
export default class PracticeTable extends React.Component {
    constructor(props) {
        super(props);

    } 

    renderPractice(practice, index) {
        return (
            <tr key={practice.id}>
                <th>
                    {practice.Name}
                </th>
                <th>
                    {logic.formatDateTime(practice.StartTime)}
                </th>
                <th>
                    {logic.formatDateTime(practice.EndTime)}
                </th>
                <th>
                   {practice.Location} 
                </th>
                <th>
                    {practice.Drills}
                </th>
            </tr>
        )

    } 

    render() {
        const styles = {
            'left': this.props.leftperc,
            'top': this.props.topperc
        }
            console.log(this.props.practices)
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>StartTime</th>
                            <th>EndTime</th>
                            <th>Location</th>
                            <th>Drills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.practices == [] ? <tr></tr> : this.props.practices.map(this.renderPractice)}
                    </tbody>
                </Table>
            </div>
        )
    }

} 
   