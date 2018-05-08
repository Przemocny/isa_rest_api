import React, {Component} from 'react'

const TasksAssingedToMe = ({data}) => {
  return (
    <div>
      <ul>
        {data.map((task, key) => {
          return <li key={key}>{JSON.stringify(task)}</li>
        })}
      </ul>
    </div>
  )
}

export {TasksAssingedToMe}
