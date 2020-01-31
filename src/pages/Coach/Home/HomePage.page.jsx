import React from 'react';
import LabelPage from '../../../components/Label/label.component';
import InformationTable from '../../../components/Table/Table.component';
import { Container } from 'react-bootstrap';

export default class CoachHomePage extends React.Component {
    constructor(props) {
        super(props);

        const userFromLocalStorate = window.localStorage.getItem('user');
        console.log(JSON.parse(userFromLocalStorate));

        this.state = {
            user:userFromLocalStorate
        }
    }

    render() {
        return( 
            <div>
                <Container>
                    <LabelPage padding="10px" text="Your Teams" bcolor="grey" topperc="12%" leftperc="10%"/>
                    <InformationTable />
                    {this.state.user.Fname}
                </Container>
            </div>
        )
    }

}