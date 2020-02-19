import React from 'react';
import { Table, Button } from 'react-bootstrap';
import logic from '../../util/logic';


export default class StatTable extends React.Component {
    constructor(props) {
        super(props);

        this.statToDetail = {};

        console.log('stats props', this.props)

        this.renderStat = this.renderStat.bind(this);
    }
    
    // getStatForPlayer = PID => () => {
    //     //this.statToDetail = logic.findObjectByKey(this.props.stats, 'id', PID);
    //     this.handleShowModal();
    // }

    //
    renderStat(stat1, index) {
        return (
            <tr key={stat1.id} >
                <th>
                    {stat1.Versus}
                </th>
                <th>
                    {stat1.Goals}
                </th>
                <th>
                    {stat1.Assists}
                </th>
                <th>
                    {stat1.ForcedTurnOver}
                </th>
                <th>
                    {stat1.Saves}
                </th>
                <th>
                    {stat1.GroundBall}
                </th>
                <th>
                    {stat1.FaceOffPercent}
                </th>
                <th>
                    {stat1.PassPercent}
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
                            <th>Opponent</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Forced Turnover</th>
                            <th>Saves</th>
                            <th>Groundball</th>
                            <th>Face Off Percent</th>
                            <th>Pass Percent</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.statit == [] ? <tr></tr> : this.props.statit.map(this.renderStat)}
                    </tbody>
                </Table>
            </div>
           
        )
    }
}