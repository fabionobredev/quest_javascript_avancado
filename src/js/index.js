import { getUser } from './services/getUser.js'
import { getRepositories } from './services/getRepositories.js'
import { getActivities } from './services/getActivities.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

const inputSearch = document.querySelector('#input-search')
const btnSearch = document.querySelector('#btn-search')

inputSearch.focus()

btnSearch.addEventListener('click', validateEmptyInput)
inputSearch.addEventListener('keypress', validateKeyPressed)

function validateKeyPressed(e){
  const userName = e.target.value
  const key = e.which || e.keycode
  const isEnterKeyPressed = key === 13
  if(isEnterKeyPressed) validateEmptyInput()
}

function validateEmptyInput(){
  const userName = inputSearch.value
  if(userName.length === 0){
    alert('Preencha o campo com o nome de usuário do GitHub')
  }else {
    userProfile(userName)
    inputSearch.value = ''
    inputSearch.focus()  
  }
}

const userProfile = async (userName) => {

  const dataUser  = await getUser(userName)  
  const dataRepositories = await getRepositories(userName)
  const dataActivities = await getActivities(userName)
  
  user.setUser(dataUser)
  user.setRepositories(dataRepositories)
  user.setActivities(dataActivities)

  let isNotUser = dataUser.message === 'Not Found'
  isNotUser ? screen.renderNotFound() : screen.renderUser(user)
    
}