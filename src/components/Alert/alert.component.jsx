import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertUser extends React.Component {
    render() {
        return (
            <div>
                <Alert variant="success" {...this.props} dismissible>A new account has successfully been created!</Alert>
            </div>
        )
    }
}