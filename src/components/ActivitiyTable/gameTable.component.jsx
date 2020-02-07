import React from 'react';
import { Table } from 'react-bootstrap';


export default class GameTable extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
    return (
        <Table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Win</th>
                    <th>Score</th>
                    <th>OpponentScore</th>
                    <th>OpponentName</th>
                    
                </tr>
            </thead>
        </Table>
    )
    }
}