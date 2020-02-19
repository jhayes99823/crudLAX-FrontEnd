import React from 'react';
import { Modal, Form, Row, Col, Button, Container } from 'react-bootstrap';

export default class ProfilePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            playerProfileInfo: []
         }
    }

    render() {
        return(
                <div>
                    <UpdatePlayerProfile />
                </div>

        )



    }
}