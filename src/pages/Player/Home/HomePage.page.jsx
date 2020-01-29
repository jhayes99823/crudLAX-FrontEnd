import React from 'react';

import NavBar from '../../../components/NavBar/NavBar.component';
import InformationTable from '../../../components/Table/Table.component';


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
    }
    
    render() {
        return (
            <div>
                <InformationTable />
            </div>
        )
    }
}