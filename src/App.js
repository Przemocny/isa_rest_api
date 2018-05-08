import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getAllUsers} from './api/users.api'


// JIRA !!

// taski - wpisywanie, status tasków, data wykonania, powiadomienia, statystyki
// komentarze, przypisywanie tasków, estymaty, dodawanie/edycja tasków
// zegarek w prawym górnym rogu (Szymon)

// użytkowników
// dodawać, usuwać, przypisywać taski, musi mieć zdjęcie, przypisany mail, 
// uprawnienia, 


class App extends Component {

  componentDidMount(){
    getAllUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
