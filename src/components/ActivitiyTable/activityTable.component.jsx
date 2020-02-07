import React from 'react';
import { Table, Button } from 'react-bootstrap';


export default class ActivityTable extends React.Component {
    constructor(props) {
        super(props);

        console.log('act props', this.props)

        this.renderActivity = this.renderActivity.bind(this);
    }

    renderActivity(activity, index) {
        return (
            <tr key={activity.id} >
                <th>
                    {activity.Name}
                </th>
                <th>
                    {activity.StartTime}
                </th>
                <th>
                    {activity.EndTime}
                </th>
                <th>
                    {activity.Location}
                </th>
                <th>
                    <Button>More Info</Button>
                </th>
            </tr>
        )
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Location</th>
                        <th>More Info</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.activities == [] ? <tr></tr> : this.props.activities.map(this.renderActivity)}
                </tbody>
            </Table>
        )
    }
}