const getAllTasks = () => {
  return fetch('https://tasks.isa.valuepoint.pl/tasks')
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
    })
}

const addTaskToUser = (creator, title) => {
  const url = 'http://tasks.isa.valuepoint.pl/tasks/add'
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

  fetch(url, fetchConfig).then(response => response.json()).then(data => {
    console.log('addTaskToUser', data)
  })
  // użycie fetcha w celu wywołania akcji
}

const getAllTasksByMyEmail = creator => {
  const url = `http://tasks.isa.valuepoint.pl/tasks/search/creator/${creator}`
  // wskazanie zasobu poprzez url

  fetch(url).then(response => response.json()).then(tasks => {
    // nasze tasks
    console.log('getAllTasksByMyEmail', tasks)

    return tasks
  })
}

const getAllTaskForMe = assignee => {
  const url = `http://tasks.isa.valuepoint.pl/tasks/search/assignee/${assignee}`
  // wskazanie zasobu poprzez url

  fetch(url).then(response => response.json()).then(tasks => {
    return tasks
  })
}

const assignTaskToUser = task_id => {
  // funkcja dostępna w obiektu window
  // do przypisywania taska do innych osób

  const assignee = prompt('podaj do kogo przepisujesz taska')

  const url = `http://tasks.isa.valuepoint.pl/tasks/${task_id}/assign-to/${assignee}`

  if (assignee.length) {
    fetch(url).then(d => d.json()).then(data => {
      console.log('assingTo', data)
      alert(`Przypisane do ${assignee}`)
    })
  }
}
