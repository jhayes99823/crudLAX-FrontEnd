import React from 'react';

import NavBar from '../../../components/NavBar/NavBar.component';
import InformationTable from '../../../components/Table/Table.component';
import { Container, Button, Row } from 'react-bootstrap';
import LabelPage from '../../../components/Label/label.component';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import ActivityTable from '../../../components/ActivitiyTable/activityTable.component';

import styles from './styles.css';
import GameTable from '../../../components/ActivitiyTable/gameTable.component';

export default class PlayerHomePage extends React.Component {
    
    render() {
        return (
            <div>
                 <Container>
                    <Row>
                        <LabelPage padding="10px" text="Your Teams" bcolor="grey" topperc="12%" leftperc="10%" />
                        
                    </Row>
                    <Row>
                        <LabelPage padding="10px" text="Your Activities" bcolor="grey" topperc="25%" leftperc="10%"/>
                    </Row>
                    <Row>
                        <ActivityTable />



                        
                        <LabelPage padding="10px" text="Your Games" bcolor="grey" topperc="35%" leftperc="10%"/>
                        <LabelPage padding="10px" text="Your Practices" bcolor="grey" topperc="45%" leftperc="10%"/>
                    </Row>
                        <GameTable/>
                </Container>
            </div>
            
        )
    }
}