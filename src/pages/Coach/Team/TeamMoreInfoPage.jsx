import React from 'react';
import { queryBuilder } from '../../../util/query-builder';
import RosterTable from '../../../components/Roster/RosterTable.component';
import { Button, Container } from 'react-bootstrap';
import AddPlayerToRoster from '../../../components/Team/AddPlayerToTeamModal.component';
import LabelPage from '../../../components/Label/label.component';
import { withRouter } from 'react-router-dom';
import PracticeTable from '../../../components/ActivitiyTable/practiceTable.component';
import GameTable from '../../../components/ActivitiyTable/gameTable.component';
import CreateGameModal from '../../../components/Activity/CreateGameModal.component';
import CreatePracticeModal from '../../../components/Activity/CreatePracticeModal.component';


class TeamMoreInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            practices: [],
            games: [],
            addPlayer: false,
            showGameModal: false,
            showPracticeModal: false,
        }

        this.TID = JSON.parse(localStorage.getItem('moreInfoTeam'));
        this.loggedUser = JSON.parse(localStorage.getItem('loggedIn'));

        this.addPlayerOpen = this.addPlayerOpen.bind(this);
        this.addPlayerClose = this.addPlayerClose.bind(this);

        this.showGameModal = this.showGameModal.bind(this);
        this.closeGameModal = this.closeGameModal.bind(this);

        this.showPracticeModal = this.showPracticeModal.bind(this);
        this.closePracticeModal = this.closePracticeModal.bind(this);

        this.moveBack = this.moveBack.bind(this);
    }

    showGameModal() {
	    this.setState({ showGameModal: true });
    }
    
	closeGameModal() {
		this.setState({ showGameModal: false });
    }
    
    showPracticeModal() {
        this.setState({ showPracticeModal: true })
    }

    closePracticeModal() {
        this.setState({ showPracticeModal: false })
    }

    addPlayerOpen() {
	    this.setState({ addPlayer: true });
    }
    
	addPlayerClose() {
		this.setState({ addPlayer: false });
    }

    componentDidMount() {
        const rosterReq = queryBuilder('/api/team/full-roster', { tid: this.TID }, 'GET')

        fetch(rosterReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            console.log('res in team mroe info page', result);
            this.setState({
                players: result.players,
            })
        },
        (err) => {
            console.log(err);
        }
        )

        const teamPracticesReq = queryBuilder('/api/coach/team/practice', { username: this.loggedUser.Username, tid: this.TID}, 'GET');

        fetch(teamPracticesReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if (result.success) {
                this.setState({
                    practices: result.practices
                })
            }
        })

        const teamGameReq = queryBuilder('/api/coach/team/game', { username: this.loggedUser.Username, tid: this.TID}, 'GET');

        fetch(teamGameReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if (result.success) {
                this.setState({
                    games: result.games
                })
            }
        })
    }

    moveBack() {
        localStorage.removeItem('moreInfoTeam');
        this.props.history.push('/coach-home');
    }

    render() {
        return (
            <div>
                <Container>
                    Full List Of Players On Your Team
                    <RosterTable tid={this.TID} players={this.state.players} />
                    <Button onClick={this.addPlayerOpen}>Add Player</Button>
                    <AddPlayerToRoster tid={this.TID} show={this.state.addPlayer} onHide={this.addPlayerClose} />
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                    Teams Assigned Games
                    <GameTable games={this.state.games}/>
                    <Button onClick={this.showGameModal}>Create A Game</Button>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                    Teams Assigned Practices
                    <PracticeTable practices={this.state.practices}/>
                    <Button onClick={this.showPracticeModal}>Create A Practice</Button>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                {/* //Insert Team Average View Here */}
                <CreateGameModal coachid={this.loggedUser.ID} tid={this.TID} show={this.state.showGameModal} onHide={this.closeGameModal} />
                <CreatePracticeModal coachid={this.loggedUser.ID} tid={this.TID} show={this.state.showPracticeModal} onHide={this.closePracticeModal} />
            </div>
        )
        
    }
}

export default withRouter(TeamMoreInfoPage);