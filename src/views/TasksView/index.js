import React, {Component} from 'react'

// importujemy metody z api
import {getAllTasksByMyEmail, getAllTaskForMe} from '../../api/tasks.api'

// importujemy komponenty składowe
import {TasksAssingedToMe} from './components'

class TasksView extends Component {
  // deklaracja stanu komponentu
  state = {
    imBusy: true,
    tasksAssignedToMe: [],
    tasksCreatedByMe: []
  }
  // metoda cyklu życia komponentu

  refresh () {
    this.setState({
      imBusy: true
    })

    Promise.all([
      getAllTasksByMyEmail('Przemek'),
      getAllTaskForMe('Przemek')
    ]).then(data => {
      const [tasksCreatedByMe, tasksAssignedToMe] = data

      // const tasksCreatedByMe = data[0];
      // const tasksAssignedToMe = data[1];

      console.log('tasks data', tasksCreatedByMe, tasksAssignedToMe)

      this.setState({
        tasksCreatedByMe,
        tasksAssignedToMe,
        imBusy: false
      })

      // this.setState({
      //     tasksCreatedByMe:tasksCreatedByMe,
      //     tasksAssignedToMe:tasksAssignedToMe
      // })

      // handle data
    })
  }

  componentDidMount () {
    // promise.all([prom1,prom2,...]) -> wykonaj wszystkie promisy a potem zrób .then
    Promise.all([
      getAllTasksByMyEmail('Przemek'),
      getAllTaskForMe('Przemek')
    ]).then(data => {
      const [tasksCreatedByMe, tasksAssignedToMe] = data

      // const tasksCreatedByMe = data[0];
      // const tasksAssignedToMe = data[1];

      console.log('tasks data', tasksCreatedByMe, tasksAssignedToMe)

      this.setState({
        tasksCreatedByMe,
        tasksAssignedToMe,
        imBusy: false
      })

      // this.setState({
      //     tasksCreatedByMe:tasksCreatedByMe,
      //     tasksAssignedToMe:tasksAssignedToMe
      // })

      // handle data
    })
  }

  render () {
    console.log('this.state', this.state)
    if (this.state.imBusy) {
      return <span>JESTEM ZAJĘTY</span>
    }

    return (
      <div>
        <h2>TasksView</h2>
        <button
          className='btn btn-block btn-warning'
          onClick={() => {
            this.refresh()
          }}
        >
          Odśwież
        </button>
        <TasksAssingedToMe {...this.state.tasksAssignedToMe} />
      </div>
    )
  }
}

export default TasksView
