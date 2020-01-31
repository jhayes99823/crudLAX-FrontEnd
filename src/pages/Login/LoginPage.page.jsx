import React from 'react';

export default class LoginPage extends React.Componenet {
    constructor(props) {
        super(props);
    
        this.sate = {
            username: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    
    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        fetch('/api/users/login/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success == true) {
                    localStorage.setITem('user', response.user)
                    this.props.history.push('/player-home');
                }
                else {
                    alert('something went wrong')
                }
            })
    }
}