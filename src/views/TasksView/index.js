import React, { Component } from 'react';

// importujemy metody z api
import {getAllTasksByMyEmail, getAllTaskForMe} from '../../api/tasks.api';

class TasksView extends Component {
    // deklaracja stanu komponentu
    state = {
        imBusy:true,
        tasksAssignedToMe:[],
        tasksCreatedByMe:[]
    }
    // metoda cyklu życia komponentu
  componentDidMount(){

    // promise.all([prom1,prom2,...]) -> wykonaj wszystkie promisy a potem zrób .then
    Promise.all([
        getAllTasksByMyEmail('Przemek'),
        getAllTaskForMe('Przemek')
    ]).then((data)=>{

        const [tasksCreatedByMe, tasksAssignedToMe] = data;

        console.log('tasks data', tasksCreatedByMe,tasksAssignedToMe)
        // const tasksCreatedByMe = data[0];
        // const tasksAssignedToMe = data[1];
        


        // handle data
    })

  }

  render() {
    return (
        <div>
            <h2>TasksView</h2>
        </div>
    );
  }
}

export default TasksView;
