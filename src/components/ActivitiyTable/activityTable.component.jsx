import React from 'react';
import { Table, Button } from 'react-bootstrap';
import GameDetailView from '../GameDetailView/GameDetailView.component';
import logic from '../../util/logic';


export default class ActivityTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetailModal: false
        }

        this.activityToDetail = {};

        console.log('act props', this.props)

        this.renderActivity = this.renderActivity.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.getActForDetView = this.getActForDetView.bind(this);
    }

    handleShowModal() {
	    this.setState({ showDetailModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showDetailModal: false });
    }
    
    getActForDetView = AID => () => {
        this.activityToDetail = logic.findObjectByKey(this.props.activities, 'id', AID);
        console.log(this.activityToDetail);
        this.handleShowModal();
    }

    //
    renderActivity(activity, index) {
        return (
            <tr key={activity.id} >
                <th>
                    {activity.Name}
                </th>
                <th>
                    {logic.formatDateTime(activity.StartTime)}
                </th>
                <th>
                    {logic.formatDateTime(activity.EndTime)}
                </th>
                <th>
                    {activity.Location}
                </th>
                <th>
                    <Button onClick={this.getActForDetView(activity.id)}>More Info</Button>
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
                <GameDetailView activity={this.activityToDetail} show={this.state.showDetailModal} onHide={this.handleCloseModal} />
            </div>
           
        )
    }
}