import {fetchLogger} from './utils.api'

const TASKS_RESOURCE_PATH = 'http://tasks.isa.valuepoint.pl/tasks'

export const getAllTasks = () => {
  return fetch(`${TASKS_RESOURCE_PATH}`).then(fetchLogger)
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

  return fetch(url, fetchConfig).then(fetchLogger)
  // użycie fetcha w celu wywołania akcji
}

export const getAllTasksByMyEmail = creator => {
  const url = `${TASKS_RESOURCE_PATH}/search/creator/${creator}`
  // wskazanie zasobu poprzez url

  return fetch(url).then(fetchLogger)
}

export const getAllTaskForMe = assignee => {
  const url = `${TASKS_RESOURCE_PATH}/search/assignee/${assignee}`
  // wskazanie zasobu poprzez url

  return fetch(url).then(fetchLogger)
}

export const assignTaskToUser = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const assignee = prompt('podaj do kogo przepisujesz taska')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/assign-to/${assignee}`

  if (assignee.length) {
    return fetch(url).then(fetchLogger)
  }
}

export const changeDescriptionOfTask = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const description = prompt('zmień opis taska')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/change-description`
  // wskazanie zasobu poprzez url

  const fetchConfig = {
    method: 'PATCH',
    body: JSON.stringify({
      description: description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (description && description.length) {
    return fetch(url, fetchConfig).then(fetchLogger)
  }
}

export const changeStatusOfTask = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const status = prompt('zmień status taska')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/change-status`
  // wskazanie zasobu poprzez url

  const fetchConfig = {
    method: 'PATCH',
    body: JSON.stringify({
      status: status
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (status && status.length) {
    return fetch(url, fetchConfig).then(fetchLogger)
  }
}

export const assignTaskTo = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const assignee = prompt('na kogo chcesz przepisać taska?')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/assign-to/${assignee}`
  // wskazanie zasobu poprzez url

  const fetchConfig = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (assignee && assignee.length) {
    return fetch(url, fetchConfig).then(fetchLogger)
  }
}

export const logHours = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const logger = prompt('kto loguje godziny?')
  const hours = prompt('ile godzin chcesz zalogować')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/log-hours`
  // wskazanie zasobu poprzez url

  const fetchConfig = {
    method: 'PATCH',
    body: JSON.stringify({
      logger: logger,
      hours: hours
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (logger && logger.length) {
    return fetch(url, fetchConfig).then(fetchLogger)
  }
}
