import React from 'react';

import NavBar from '../../../components/NavBar/NavBar.component';
import InformationTable from '../../../components/Table/Table.component';
import { Container, Button, Row } from 'react-bootstrap';
import LabelPage from '../../../components/Label/label.component';
import TeamTable from '../../../components/TeamTable/TeamTable.component';
import ActivityTable from '../../../components/ActivitiyTable/activityTable.component';

import styles from './styles.css'; //wiorerioweurweioruweioruweioruweioruweioruweioruweioruweioruweioruweioruweiorweioruweioruweioruweioruweioruweioruweioruweioruweioruwiou

export default class PlayerHomePage extends React.Component {
    componentDidMount() {
        this.callApi()
            .then(res => console.log(res))
            .catch(err => console.log(err));
      }

    callApi = async () => {
        const response = await fetch('/api/users');
        const body = await response.json();
        console.log(body);
        return body.result[2];
    }
    
    render() {
        return (
            <div>
                 <Container>
                    <Row>
                        <LabelPage padding="10px" text="Your Teams" bcolor="grey" topperc="12%" leftperc="10%"/>
                    </Row>
                    <Row>
                        <LabelPage padding="10px" text="Your Activities" bcolor="grey" topperc="25%" leftperc="10%"/>
                        <ActivityTable />
                    </Row>
                </Container>
            </div>
            
        )
    }
}