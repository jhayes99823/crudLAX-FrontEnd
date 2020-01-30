import React from 'react';
export default class PlayerLoginForm extends React.Component {
    render() {
        return (
            <form>
            <h1>Get the player FName and PlayerLName</h1>
            <p>Enter your new user name:</p>
            <input
              type="text"
            />
            <p>Enter your new password:</p>
            <input type="password"></input>
          </form>
        )
    }
}