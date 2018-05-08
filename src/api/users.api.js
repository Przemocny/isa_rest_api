import {fetchLogger} from './utils.api';


const MY_ID = '5ae9d86a1f57534def4fb55d'
const MY_NICKNAME = 'Przemek'
const USERS_RESOURCE_PATH = 'http://tasks.isa.valuepoint.pl/users';

export const getAllUsers = () => {
  return fetch(`${USERS_RESOURCE_PATH}`)
    .then(fetchLogger)
}

export const getMyUser = id => {
  // const url = "https://tasks.isa.valuepoint.pl/users" + "/" + id;
  const url = `${USERS_RESOURCE_PATH}/${id}`

  return fetch(url)
  .then(fetchLogger)
}
