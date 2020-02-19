import React from 'react';
import { queryBuilder } from '../../../util/query-builder';
import RosterTable from '../../../components/Roster/RosterTable.component';
import { Button, Container } from 'react-bootstrap';
import AddPlayerToRoster from '../../../components/Team/AddPlayerToTeamModal.component';
import LabelPage from '../../../components/Label/label.component';
import { withRouter } from 'react-router-dom';

class TeamMoreInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            addPlayer: false
        }

        this.loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
        this.TID = JSON.parse(localStorage.getItem('moreInfoTeam'));


        this.addPlayerOpen = this.addPlayerOpen.bind(this);
        this.addPlayerClose = this.addPlayerClose.bind(this);

        this.moveBack = this.moveBack.bind(this);
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
            console.log(result);
            this.setState({
                players: result.players,
            })
        },
        (err) => {
            console.log(err);
        }
        )
    }

    moveBack() {
        localStorage.removeItem('moreInfoTeam');
        this.props.history.push('/coach-home');
    }

    render() {
        return (
            <div>
                <Container>
                    <LabelPage padding="10px" text="Avaliable Players" bcolor="grey" topperc="12%" leftperc="10%"/>
                        <br></br>
                        <br></br>
                        <br></br>
                    <RosterTable tid={this.TID} players={this.state.players} />
                    <Button onClick={this.addPlayerOpen}>Add Player</Button>
                    <AddPlayerToRoster tid={this.TID} show={this.state.addPlayer} onHide={this.addPlayerClose} />
                </Container>
                {/* //Insert Team Average View Here */}
            </div>
        )
        
    }
}

export default withRouter(TeamMoreInfoPage);