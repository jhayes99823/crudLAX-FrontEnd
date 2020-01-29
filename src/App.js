import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.component';
import InformationTable from './components/Table/Table.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <InformationTable />
      </div>
    );
  }
}

export default App;
