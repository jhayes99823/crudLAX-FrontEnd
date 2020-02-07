import React from 'react';
import LabelPage from '../../../components/Label/label.component';
import { Container, Button } from 'react-bootstrap';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import CreateTeamModal from '../../../components/Team/CreateTeam.component';

export default class CoachHomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            teams: [],
            showModal: false,
            userid: null,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
        
        console.log('loggedin', loggedUser);
        const url = 'api/teams';
        var params = {
            username: loggedUser.Username
        };

        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        console.log('query', query);

        var request = new Request(url + "?" + query, {
            method: 'GET'
        })

        fetch(request, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            this.setState({
                teams: result.teams,
                userid: result.user[0].ID
            });
        },
        (err) => {
            console.log(err)
        })
      }

    
    handleShowModal() {
	    this.setState({ showModal: true });
    }
    
	handleCloseModal() {
		this.setState({ showModal: false });
	}

    render() {
        return( 
            <div>
                <Container>
                    <LabelPage padding="10px" text="Your Teams" bcolor="grey" topperc="12%" leftperc="10%"/>
                    <TeamTable teams={this.state.teams} topperc="12%" leftperc="20%" />
                    <Button onClick={this.handleShowModal}>Create Team</Button>
                    <CreateTeamModal coachid={this.state.userid} show={this.state.showModal} onHide={this.handleCloseModal} />
                </Container>
            </div>
        )
    }

}