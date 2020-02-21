import React from 'react';
import { Table, Button } from 'react-bootstrap';
import logic from '../../util/logic';


export default class StatTableForAverage extends React.Component {
    constructor(props) {
        super(props);

        this.statToDetail = {};

        console.log('stats props', this.props)

        this.renderStat = this.renderStat.bind(this);
    }


    //
    renderStat(stat, index) {
        
        return (
            <tr key={stat.id} >
                <th>
                    {stat.LName}
                </th>
                <th>
                    {stat.FName}
                </th>
                <th>
                    {stat.Position}
                </th>
                <th>
                    {stat.Goals}
                </th>
                <th>
                    {stat.Assists}
                </th>
                <th>
                    {stat.ForcedTurnover}
                </th>
                <th>
                    {stat.Saves}
                </th>
                <th>
                    {stat.GroundBall}
                </th>
                <th>
                    {stat.FaceOffPercent}
                </th>
                <th>
                    {stat.PassPercent}
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
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Position</th>
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
                    {this.props.statprime == [] ? <tr></tr> : this.props.statprime.map(this.renderStat)}
                    </tbody>
                </Table>
            </div>
           
        )
    }
}