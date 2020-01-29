import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.component';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/LogIn/login.component';
import Signup from './components/SignUp/signup.component';
import PlayerHomePage from './pages/Player/Home/HomePage.page';
import PlayerSignUpPage from './pages/Player/SignUp/PlayerSignUp.page';
import CoachSignUpPage from './pages/Coach/CoachSignUp.page';

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
            <Route path="/player-home" component={PlayerHomePage} />
            <Route path="/player-sign-up" component={PlayerSignUpPage} />
            <Route path="/coach-sign-up" component={CoachSignUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
