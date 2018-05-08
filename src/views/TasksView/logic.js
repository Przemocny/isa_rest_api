import {changeDescriptionOfTask, changeStatusOfTask, assignTaskTo, logHours} from '../../api/tasks.api'

export const assignTasksTo = (task_id,refresh) => {
    // do kogo przypisujemy
    assignTaskTo(task_id).then(()=>{
        refresh()
    })
}
export const logHoursToTask = (task_id,refresh) => {
    // kto loguje godziny i ile godzin
    
    logHours(task_id).then(()=>{
        refresh()
    })
}
export const changeStatus = (task_id,refresh) => {
    // na jaki status chce zmienić
    changeStatusOfTask(task_id).then(()=>{
        refresh()
    })
}
export const changeDescription = (task_id, refresh) => {
    // na jaki opis chce zmienić
  changeDescriptionOfTask(task_id).then(()=>{
      refresh()
  })
}
