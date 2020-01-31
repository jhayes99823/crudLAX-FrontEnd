import React from 'react';
import LabelPage from '../../../components/Label/label.component';
import InformationTable from '../../../components/Table/Table.component';
import { Container, Button } from 'react-bootstrap';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import CreateTeamModal from '../../../components/Team/CreateTeam.component';

export default class CoachHomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            coachid: 3,
            teams: [],
            showModal: false,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        fetch('api/teams?username=rrogers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            localStorage.setItem('teams', JSON.stringify(result.teams));
        },
        (err) => {
            console.log(err)
        })
      }

    callApi = async () => {
        const response = await fetch('/api/users');
        const body = await response.json();
        console.log(body.result[2])
        console.log(body);
    }

    
    handleShowModal() {
	    this.setState({ showModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showModal: false });
	}


    getTeams = async () => {        
        var query = [
            `coachid=3`
        ].join('&');

            fetch('api/teams?username=rrogers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => res.json())
            .then((result) => {
                console.log(result.teams[0])
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
                    <TeamTable topperc="12%" leftperc="20%" />
                    <Button onClick={this.handleShowModal}>Create Team</Button>
                    <CreateTeamModal show={this.state.showModal} onHide={this.handleCloseModal} />
                </Container>
            </div>
        )
    }

}