import React, { Component } from 'react';

// widoki
import TasksView from './views/TasksView'

import logo from './logo.svg';
import './App.css';
import {getAllUsers} from './api/users.api'
import {getAllTasks} from './api/tasks.api'


// JIRA !!

// taski - wpisywanie, status tasków, data wykonania, powiadomienia, statystyki
// komentarze, przypisywanie tasków, estymaty, dodawanie/edycja tasków
// zegarek w prawym górnym rogu (Szymon)

// użytkowników
// dodawać, usuwać, przypisywać taski, musi mieć zdjęcie, przypisany mail, 
// uprawnienia, 

class App extends Component {

  componentDidMount(){
    // getAllUsers();
    // getAllTasks();
  }

  render() {
    return (
      <div>
       <TasksView/>
      </div>
    );
  }
}

export default App;
