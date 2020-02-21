import React from 'react';
import {queryBuilder} from '../../../util/query-builder';
import StatGameTable from '../../../components/StatTable/StatTableForGame.component';
import { Container } from 'react-bootstrap';


export default class GameMoreInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: [],
        }

        this.TID = JSON.parse(localStorage.getItem('moreInfoTeam'));
        this.GID = JSON.parse(localStorage.getItem('moreGameInfo'));
        console.log('TID stuff', this.TID)
        console.log('GID stuff', this.GID)
    }

    componentDidMount() {
        const statTeamReq = queryBuilder('/api/stat/viewTeamStatByGame', { TID: this.TID, GID: this.GID }, 'GET');
        fetch(statTeamReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            console.log('getting all game stats', result.stats);
            if(result.success==true){
                this.setState({
                    stats: result.stats,
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <StatGameTable statmap={this.state.stats} />
                </Container>
                 
            </div>
        )
    }
}