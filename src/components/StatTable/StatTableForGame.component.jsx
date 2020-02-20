import React from 'react';
import { Table, Button } from 'react-bootstrap';
import logic from '../../util/logic';


export default class StatTableForGame extends React.Component {
    constructor(props) {
        super(props);

        this.statToDetail = {};

        console.log('stats props', this.props)

        this.renderStat = this.renderStat.bind(this);
    }


    //
    renderStat(stat1, index) {
        
        return (
            <tr key={stat1.id} >
                <th>
                    {stat1.LName}
                </th>
                <th>
                    {stat1.Fname}
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
                    {stat1.faceOffPercent}
                </th>
                <th>
                    {stat1.passPercent}
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
                    {this.props.statmap == [] ? <tr></tr> : this.props.statmap.map(this.renderStat)}
                    </tbody>
                </Table>
            </div>
           
        )
    }
}