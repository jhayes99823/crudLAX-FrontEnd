import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.component';
import InformationTable from './components/Table/Table.component';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/LogIn/login.component';
import Signup from './components/SignUp/signup.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
