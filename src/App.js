import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.component';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/LogIn/login.component';
import Signup from './components/SignUp/signup.component';
import PlayerHomePage from './pages/Player/Home/HomePage.page';
import PlayerSignUpPage from './pages/Player/SignUp/PlayerSignUp.page';
import CoachSignUpPage from './pages/Coach/SignUp/CoachSignUp.page';
import CoachHomePage from './pages/Coach/Home/HomePage.page';
import { AuthProvider } from './contexts';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <AuthProvider>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/player-home" component={PlayerHomePage} />
                <Route path="/signup/player" component={PlayerSignUpPage} />
                <Route path="/coach-home" component={CoachHomePage} />
                <Route path="/signup/coach" component={CoachSignUpPage} />
              </Switch>
          </AuthProvider>
      </div>
    );
  }
}

export default App;
