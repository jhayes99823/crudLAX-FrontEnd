import React from 'react';
import { Modal, Form, Row, Col, Button, Container } from 'react-bootstrap';
export default class UpdatePlayerProfile extends React.Component {
  constructor(props) {
    super(props);

    //instantiate stuff 
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
    this.getPosition = this.getPosition.bind(this); 
    this.getSchoolYr = this.getSchoolYr.bind(this); 

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
          Position: this.getPosition(playerProfile[0].Position),
          SchoolYear: this.getSchoolYr(playerProfile[0].SchoolYear),
          Playable: playerProfile[0].Playable
        })
  }
    console.log("update player modal: ", this.state) ; 
  }


  getPosition(pos) {
    switch(pos) {
        case 'Attacker':
            return 'A';
            break;
        case 'Midfield':
            return 'M';
        case 'Defender':
            return 'D';
            break;
        case 'Goalie':
            return 'G';
            break;
    }
}

getSchoolYr(yr) {
    switch(yr) {
        case 'Freshman':
            return 0;
            break;
        case 'Sophomore':
            return 1;
        case 'Junior':
            return 2;
            break;
        case 'Senior':
            return 3;
            break;
    }
} 
  setValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('state b4 send', this.state);
    const newPlayer = {
        UserName: this.state.UserName,
        FirstName: this.state.FirstName, 
        LastName: this.state.LastName, 
        //Position:  this.getPosition(this.state.Position), 
        Number: this.state.Number, 
        SchoolYear: this.getSchoolYr(this.state.SchoolYear), 
        Playable: this.state.Playable
    }
    console.log("Before trying to update"); 
    console.log(newPlayer); 
    fetch('/api/activity/player/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlayer)
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
                {/* <Form.Label>  Position</Form.Label> */}
                {/* <Form.Control name=" Position" as= "select" defaultValue={this.state.Position} onChange={this.setValue} >
                                    <option>Attacker</option>
                                    <option>Midfield</option>
                                    <option>Defender</option>
                                    <option>Goalie</option>
                  </Form.Control> */}
              </Form.Group>
            </Form.Row> 



            <Form.Group as={Col} controlId="formSchoolYear">
             

              {/* <Form.Control placeholder={this.state.SchoolYear} name="SchoolYear" as="select" onChange={this.setValue}>
                                    <option>Freshman</option>
                                    <option>Sophomore</option>
                                    <option>Junior</option>
                                    <option>Senior</option>
                </Form.Control> */}
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