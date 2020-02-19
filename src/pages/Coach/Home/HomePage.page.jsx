import React from 'react';
import LabelPage from '../../../components/Label/label.component';
import { Container, Button } from 'react-bootstrap';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import CreateTeamModal from '../../../components/Team/CreateTeam.component';
import ActivityTable from '../../../components/ActivitiyTable/activityTable.component';

import qb from '../../../util/query-builder';
import CreateActivityModal from '../../../components/Activity/CreateActivityModal.component';

export default class CoachHomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            teams: [],
            activities: [],
            showModal: false,
            showActModal: false,
            userid: null,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleShowModalAct = this.handleShowModalAct.bind(this);
        this.handleCloseModalAct = this.handleCloseModalAct.bind(this);
    }

    componentDidMount() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
       
        const usernameReq = qb.queryBuilder('api/teams',  { username: loggedUser.Username }, 'GET');       

        const activityReq = qb.queryBuilder('api/activity', { username: loggedUser.Username }, 'GET');

        fetch(usernameReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if (result.success) {
                this.setState({
                    teams: result.teams,
                    userid: result.user[0].ID
                });
                localStorage.setItem('teams', JSON.stringify(result.teams));
            }
        },
        (err) => {
            console.log(err)
        })

        fetch(activityReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            console.log('res from act call', result);
            if (result.success == true) {
                this.setState({
                    activities: result.activities
                })
            }
            localStorage.setItem('activities', JSON.stringify(result.activities));
        })

      }

    
    handleShowModal() {
	    this.setState({ showModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showModal: false });
    }
    
    handleShowModalAct() {
	    this.setState({ showActModal: true });
    }
    
	handleCloseModalAct() {
		this.setState({ showActModal: false });
	}

    render() {
        return( 
            <div>
                <Container>
                    <LabelPage padding="10px" text="Your Teams" bcolor="grey" topperc="12%" leftperc="10%"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <TeamTable teams={this.state.teams}/>
                    <Button onClick={this.handleShowModal}>Create Team</Button>
                    <CreateTeamModal coachid={this.state.userid} show={this.state.showModal} onHide={this.handleCloseModal} />
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                    <LabelPage padding="10px" text="Your Activities" bcolor="grey" topperc="50%" leftperc="10%"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    {console.log(this.state.activities)}
                    <ActivityTable activities={this.state.activities}/>
                    <Button onClick={this.handleShowModalAct}>Create Activity</Button>
                    <CreateActivityModal coachid={this.state.userid} teams={this.state.teams} show={this.state.showActModal} onHide={this.handleCloseModalAct} />
                </Container>
            </div>
        )
    }

}