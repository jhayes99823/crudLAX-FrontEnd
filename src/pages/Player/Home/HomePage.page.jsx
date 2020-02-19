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
import UpdatePlayerProfile from '../../../components/ActivitiyTable/updatePlayerProfile.component';
import AddPlayerToRoster from '../../../components/Team/AddPlayerToTeamModal.component';


export default class PlayerHomePage extends React.Component {

    constructor(props) {
        super(props);
        

        this.playerProfile = {};
        this.state = {
            games: [],
            userid: [], 
            practices: [], 
            teams: [], 
            updatePlayeProfile:  []
        }
    }

    componentDidMount() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
        console.log(loggedUser);

        //get the player games
        const gamesReq = qb.queryBuilder('/api/activity/game/player', { username: loggedUser.Username }, 'GET');

        fetch(gamesReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if(result.success==true) {
            this.setState({
                games: result.activities,
            })
           console.log(this.state)
          } 
        })

        //get the player practices

        const practiceReq = qb.queryBuilder('/api/activity/practice/player', { username: loggedUser.Username }, 'GET');
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

        //get the team information of player 
        const teamsReq = qb.queryBuilder('/api/activity/team/player/information', { username: loggedUser.Username }, 'GET');
        console.log(teamsReq); 
        fetch(teamsReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if(result.success==true){
                this.setState({
                    teams: result.teams,
                })
                console.log(result); 
            }
        })
        
    
    
    }
     
    render() { //<LabelPage padding="10px" text="Your Games" bcolor="grey" t7/>
        return (
            <div>
                 <Container>
                     Your team information 
                   <TeamPlayerTable teams = {this.state.teams}></TeamPlayerTable>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                 <Container>
                        Your Games 
                        {/* <ActivityTable /> */}
                        <GameTable games={this.state.games}/>
                        {/* <LabelPage padding="10px" text="Your Practices" bcolor="grey" topperc="45%" leftperc="10%"/> */}
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                     Your Practices 
                    <PracticeTable practices = {this.state.practices}/> 
                </Container>
            </div>
            
        )
    }

    
}










