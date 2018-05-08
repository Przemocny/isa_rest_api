import React, {Component} from 'react'

// importujemy logikę
import * as logic from './logic'

const TasksAssingedToMe = ({data, refresh}) => {
  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
            <th>creator</th>
            <th>assignee</th>
            <th>description</th>
            <th>hours</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, key) => {
            return (
              <tr key={key}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.creator}</td>
                <td>{task.assignee}</td>
                <td>{task.description}</td>
                <td>{JSON.stringify(task.hours)}</td>
                <td>
                  <button
                    className='btn btn-default'
                    onClick={() => {
                      logic.assignTasksTo()
                    }}
                  >
                    Przypisz taska
                  </button>
                  <button
                    className='btn btn-default'
                    onClick={() => {
                      logic.changeStatus()
                    }}
                  >
                    Zmień status
                  </button>
                  <button
                    className='btn btn-default'
                    onClick={() => {
                      logic.changeDescription(task._id, refresh)
                    }}
                  >
                    Zmień opis
                  </button>
                  <button
                    className='btn btn-default'
                    onClick={() => {
                      logic.logHoursToTask()
                    }}
                  >
                    Zaloguj godziny
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export {TasksAssingedToMe}
