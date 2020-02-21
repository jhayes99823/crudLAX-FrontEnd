import React from 'react';
import LabelPage from '../../../components/Label/label.component';
import { Container, Button } from 'react-bootstrap';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import CreateTeamModal from '../../../components/Team/CreateTeam.component';
import ActivityTable from '../../../components/ActivitiyTable/activityTable.component';

import qb from '../../../util/query-builder';

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
    }

    handleShowModal() {
	    this.setState({ showModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showModal: false });
	}

    componentDidMount() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
       
        const usernameReq = qb.queryBuilder('api/teams',  { username: loggedUser.Username }, 'GET');       

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
                console.log('coach home page res', result);
                localStorage.setItem('Teams', JSON.stringify(result.teams));
            }
            console.log(result.teams)
            console.log('teatest')
        },
        (err) => {
            console.log(err)
        })

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
            </div>
        )
    }

}