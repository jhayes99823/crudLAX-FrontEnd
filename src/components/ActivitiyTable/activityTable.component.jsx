import React from 'react';
import { Table } from 'react-bootstrap';


export default class ActivityTable extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
    return (
        <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Date</th>
                    <th>Location</th>
                </tr>
            </thead>
        </Table>
    )
    }
}