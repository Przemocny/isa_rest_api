import {fetchLogger} from './utils.api'

const TASKS_RESOURCE_PATH = 'http://tasks.isa.valuepoint.pl/tasks';


const getAllTasks = () => {
  return fetch(`${TASKS_RESOURCE_PATH}`)
    .then(fetchLogger)
    .then(data => {
      console.log('data', data)
    })
}

const addTaskToUser = (creator, title) => {
  const url = `${TASKS_RESOURCE_PATH}/add`
  // wskazanie zasobu poprzez url

  const task = {
    creator: creator,
    title: title
  }
  // struktura danych wysyłanych do serwera

  const fetchConfig = {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // konfiguracja fetcha dla danego serwera

  fetch(url, fetchConfig).then(fetchLogger).then(data => {
    console.log('addTaskToUser', data)
  })
  // użycie fetcha w celu wywołania akcji
}

const getAllTasksByMyEmail = creator => {
  const url = `${TASKS_RESOURCE_PATH}/search/creator/${creator}`
  // wskazanie zasobu poprzez url

  fetch(url).then(fetchLogger).then(tasks => {
    // nasze tasks
    console.log('getAllTasksByMyEmail', tasks)
    return tasks
  })
}

const getAllTaskForMe = assignee => {
  const url = `${TASKS_RESOURCE_PATH}/search/assignee/${assignee}`
  // wskazanie zasobu poprzez url

  fetch(url).then(fetchLogger).then(tasks => {
    return tasks
  })
}

const assignTaskToUser = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const assignee = prompt('podaj do kogo przepisujesz taska')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/assign-to/${assignee}`

  if (assignee.length) {
    fetch(url).then(fetchLogger).then(data => {
      console.log('assingTo', data)
      alert(`Przypisane do ${assignee}`)
    })
  }
}
