import React from 'react';
import { Modal, Form, Row, Col, Button, Container } from 'react-bootstrap';

export default class ProfilePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            playerProfileInfo: []
         }
    }

    componentDidMount(){
        const playerReq = qb.queryBuilder('api/activity/team/player/profileInfo', {username: loggedUser.Username})
        fetch(gamesReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            if(result.success==true) {
            this.setState({
                playerProfileInfo: result.playerProfileInfo,
            })
           console.log(this.state)
          } 
        })
   
    }
    render() {
        return(
                <div>
                    <UpdatePlayerProfile playerProfileInfo = {this.state.playerProfileInfo} />
                </div>

        )



    }
}