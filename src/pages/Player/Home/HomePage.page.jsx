import React from 'react';

import NavBar from '../../../components/NavBar/NavBar.component';
import InformationTable from '../../../components/Table/Table.component';
import { Container, Button, Row } from 'react-bootstrap';
import LabelPage from '../../../components/Label/label.component';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import ActivityTable from '../../../components/ActivitiyTable/activityTable.component';
import qb from '../../../util/query-builder';

import styles from './styles.css';
import GameTable from '../../../components/ActivitiyTable/gameTable.component';
import PracticeTable from '../../../components/ActivitiyTable/practiceTable.component';
import TeamPlayerTable from '../../../components/ActivitiyTable/teamPlayerTable.component';

export default class PlayerHomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            userid: [], 
            practices: [], 
            teams: []
        }
    }

    componentDidMount() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
        console.log(loggedUser);
        const gamesReq = qb.queryBuilder('api/activity/game/player', { username: loggedUser.Username }, 'GET');

        fetch(gamesReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if (result.success) {
                this.setState({
                    games: result.activities,
                })
            }

           console.log(this.state)
        })

        const practiceReq = qb.queryBuilder('api/activity/practice/player', { username: loggedUser.Username }, 'GET');
        fetch(practiceReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if(result.success==true){
                this.setState({
                    practices: result.activities,
                })
            }
        })

        //get teams 

        const teamsReq = qb.queryBuilder('api//activity/team/player', { username: loggedUser.Username }, 'GET');
        fetch(practiceReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if(result.success==true){
                this.setState({
                    teams: result.activities,
                })
            }
        })
    
    
    
    }
     
    render() { //<LabelPage padding="10px" text="Your Games" bcolor="grey" t7/>
        return (
            <div>
                 <Container>
                     <LabelPage padding="8px" text="Your Team" bcolor="grey" topperc="25%" leftperc="7%"/>
                   <TeamPlayerTable teams = {this.state.teams}></TeamPlayerTable>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                 <Container>
                 <LabelPage padding="8px" text="Your Games" bcolor="grey" topperc="45%" leftperc="7%"/>
                        {/* <ActivityTable /> */}
                        <GameTable games={this.state.games}/>
                        {/* <LabelPage padding="10px" text="Your Practices" bcolor="grey" topperc="45%" leftperc="10%"/> */}
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                     <LabelPage padding="8px" text="Your Practice" bcolor="grey" topperc="55%" leftperc="7%"/>
                    <PracticeTable practices = {this.state.practices}/> 
                </Container>

                
            </div>
            
        )
    }

    
}










