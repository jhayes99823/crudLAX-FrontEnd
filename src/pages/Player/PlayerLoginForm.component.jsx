import React from 'react';
export default class PlayerLoginForm extends React.Component {
    render() {
        return (
            <form>
              <h1> the new bob</h1>
            <p>Enter your new user name:</p>
            <input
              type="text"
            />
            <p>Enter your new password:</p>
            <input type="password"></input>
            <button>
              Reset Your Passowrd 
            </button>
          </form>
        )
    }
}