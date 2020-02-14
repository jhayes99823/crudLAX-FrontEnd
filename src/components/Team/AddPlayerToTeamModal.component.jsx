import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import FindPlayer from '../FindPlayer/FindPlayer.component';
import { Alert } from 'react-bootstrap';
import util from '../../util/query-builder'

export default class AddPlayerToRoster extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            puname: '',
            tid: this.props.tid,
            showAlert: false,
            ErrorCode: 0
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('state b4 send', this.state);
        fetch('/api/team/full-roster/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ player: this.state })
        }).then((res) => res.json())
        .then((result) => {
                console.log(result);
                if (result.success == true) {
                    window.location.reload();
                }
                else {
                    this.setState({
                        ErrorCode: result.ErrorCode
                    });
                    this.showAlert();
                }
        })
    }

    showAlert() {
        this.setState({ showAlert: true });
    }

    closeAlert() {
        this.setState({ showAlert: false });
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} centered>
                    <Modal.Header>
                        Add Player To Roster
                    </Modal.Header>
                    <Alert show={this.state.showAlert} onClose={this.closeAlert} dismissable variant='danger'>{ util.ErrorMapper(this.state.ErrorCode) }</Alert>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="playerUname">
                                <Form.Label>Find Player By UserName</Form.Label>
                                <Form.Control name="puname" type="text" placeholder="Enter Player UserName" onChange={this.setValue} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Player
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}