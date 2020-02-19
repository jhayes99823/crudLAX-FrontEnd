import React from 'react';
import { Modal, Form, Row, Col, Button, Container } from 'react-bootstrap';
export default class UpdatePlayerProfile extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      UserName: '', 
      FirstName: '',
      LastName: '',
      Number: '',
      Position: '',
      SchoolYear: '',
      Playable: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);

  }


  componentDidMount() {
    console.log('getting update team and loc stor', localStorage);
    const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
    const playerProfile = JSON.parse(localStorage.getItem('playerProfile'));
    console.log('player profiel in update player profile', playerProfile);
    if(playerProfile!=null){
        this.setState({
          UserName: loggedUser.Username,
          FirstName: playerProfile[0].Fname,
          LastName: playerProfile[0].Lname,
          Number: playerProfile[0].Number,
          Position: playerProfile[0].Position,
          SchoolYear: playerProfile[0].SchoolYear,
          Playable: playerProfile[0].Playable
        })
  }
    console.log("update player modal: ", this.state) ; 
  }


  setValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('state b4 send', this.state);
    fetch('/api/activity/player/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.success == true) {
          this.props.history.push('/player-home')
        }
        else {
          alert('something went wrong')
        }
      })
  }


  render() {
    return (

        <Container>
             <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name </Form.Label>
                <Form.Control name="FirstName" type="text" defaultValue={this.state.FirstName} onChange={this.setValue} />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control name="LastName" type="text" defaultValue={this.state.LastName} onChange={this.setValue} />
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} controlId="formNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control name="Number" type="number" defaultValue={this.state.Number} onChange={this.setValue} />
              </Form.Group>

              <Form.Group as={Col} controlId="formPosition">
                <Form.Label>  Position</Form.Label>
                <Form.Control name=" Position" defaultValue={this.state.Position} onChange={this.setValue} />
              </Form.Group>
            </Form.Row>



            <Form.Group as={Col} controlId="formSchoolYear">
              <Form.Label>SchoolYear </Form.Label>

              <Form.Control defaultValue={this.state.SchoolYear} name="SchoolYear" type="number" onChange={this.setValue} min="8" />

            </Form.Group>


            <Form.Group as={Col} controlId="formPlayable">
              <Form.Label>Playable</Form.Label>

              <Form.Control defaultValue={this.state.Playable} name="Playable" type="bit" onChange={this.setValue} />

            </Form.Group>



            <Button variant="primary" type="submit">
              Update
          </Button>
          </Form>
      

        </Container>
         
    );
  }
} 