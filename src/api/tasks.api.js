import {fetchLogger} from './utils.api'

const TASKS_RESOURCE_PATH = 'http://tasks.isa.valuepoint.pl/tasks';


export const getAllTasks = () => {
  return fetch(`${TASKS_RESOURCE_PATH}`)
    .then(fetchLogger)
}

export const addTaskToUser = (creator, title) => {
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

  return fetch(url, fetchConfig)
  .then(fetchLogger)
  // użycie fetcha w celu wywołania akcji
}

export const getAllTasksByMyEmail = creator => {
  const url = `${TASKS_RESOURCE_PATH}/search/creator/${creator}`
  // wskazanie zasobu poprzez url

  return fetch(url)
  .then(fetchLogger)
}

export const getAllTaskForMe = assignee => {
  const url = `${TASKS_RESOURCE_PATH}/search/assignee/${assignee}`
  // wskazanie zasobu poprzez url

  return fetch(url)
  .then(fetchLogger)
}

export const assignTaskToUser = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const assignee = prompt('podaj do kogo przepisujesz taska')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/assign-to/${assignee}`

  if (assignee.length) {
   return fetch(url)
    .then(fetchLogger)
  }
}
