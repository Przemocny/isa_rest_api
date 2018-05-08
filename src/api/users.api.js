const MY_ID = '5ae9d86a1f57534def4fb55d'
const MY_NICKNAME = 'Przemek'

const getAllUsers = () => {
  return fetch('https://tasks.isa.valuepoint.pl/users')
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
    })
}

const getMyUser = id => {
  // const url = "https://tasks.isa.valuepoint.pl/users" + "/" + id;
  const url = `https://tasks.isa.valuepoint.pl/users/${id}`

  return fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('getMyUser', data)
  })
}
