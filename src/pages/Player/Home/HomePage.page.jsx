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

export default class PlayerHomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            userid: []
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
            this.setState({
                games: result.activities,
            })
           console.log(this.state)
        })

        // console.log('loggedin', loggedUser);
        // console.log('state', this.state);
        // const url = '/api/activity/game/player';
        // var params = {
        //     username: loggedUser.Username
        // };

        // var esc = encodeURIComponent;
        // var query = Object.keys(params)
        //     .map(k => esc(k) + '=' + esc(params[k]))
        //     .join('&');

        // console.log('query', query);

        // var request = new Request(url + "?" + query, {
        //     method: 'GET'
        // })

        // fetch(request, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }).then((res) => res.json())
        // .then((result) => {
        //     console.log('result', result);
            // localStorage.setItem('teams', JSON.stringify(result.teams));
            // this.setState({
            //     games: result.games,
            //     userid: result.user[0].ID
        //     // });
        //     console.log('state', this.state);
        // },
        // (err) => {
        //     console.log(err)
        // })
      }

    render() {
        return (
            <div>
                 <Container>
                    <Row>
                    
                        
                    </Row>
                    <Row>
                        <LabelPage padding="10px" text="Your Activities" bcolor="grey" topperc="25%" leftperc="10%"/>
                    </Row>
                    <Row>
                        {/* <ActivityTable /> */}
                        <GameTable games={this.state.games}/>

                        <LabelPage padding="10px" text="Your Games" bcolor="grey" topperc="35%" leftperc="10%"/>
                        <LabelPage padding="10px" text="Your Practices" bcolor="grey" topperc="45%" leftperc="10%"/>
                    </Row>
                        
                </Container>
            </div>
            
        )
    }

    //<GameTable games={this.state.games}/>
}













// import React from 'react';

// import NavBar from '../../../components/NavBar/NavBar.component';
// import InformationTable from '../../../components/Table/Table.component';
// import { Container, Button, Row } from 'react-bootstrap';
// import LabelPage from '../../../components/Label/label.component';
// import TeamTable from '../../../components/TeamTable/TeamTable.component';
// import ActivityTable from '../../../components/ActivitiyTable/activityTable.component';

// import styles from './styles.css'; //wiorerioweurweioruweioruweioruweioruweioruweioruweioruweioruweioruweioruweiorweioruweioruweioruweioruweioruweioruweioruweioruweioruwiou

// export default class PlayerHomePage extends React.Component {
//     componentDidMount() {
//         this.callApi()
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//       }

//     callApi = async () => {
//         const response = await fetch('/api/users');
//         const body = await response.json();
//         console.log(body);
//         return body.result[2];
//     }
    
//     render() {
//         return (
//             <div>
//                  <Container>
//                     <Row>
//                         <LabelPage padding="10px" text="Your Teams" bcolor="grey" topperc="12%" leftperc="10%"/>
//                     </Row>
//                     <Row>
//                         <LabelPage padding="10px" text="Your Activities" bcolor="grey" topperc="25%" leftperc="10%"/>
//                         <ActivityTable />
//                     </Row>
//                 </Container>
//             </div>
            
//         )
//     }
// }