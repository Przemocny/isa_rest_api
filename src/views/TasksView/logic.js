import {changeDescriptionOfTask} from '../../api/tasks.api'

export const assignTasksTo = data => {
    // do kogo przypisujemy
  alert('assignTasksTo')
}
export const logHoursToTask = data => {
    // kto loguje godziny i ile godzin
    
  alert('logHoursToTask')
}
export const changeStatus = data => {
    // na jaki status chce zmienić
    
  alert('changeStatus')
}
export const changeDescription = (task_id, refresh) => {
    // na jaki opis chce zmienić
  changeDescriptionOfTask(task_id).then(()=>{
      refresh()
  })
}
