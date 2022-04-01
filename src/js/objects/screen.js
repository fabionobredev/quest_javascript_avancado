const screen = {

  userProfile: document.querySelector('.profile-data'),

  renderUser(user){
    let infoRender = `<div class="info">
                      <img src="${user.avatarUrl}">
                      <div class="data">
                        <h1>${user.userName ?? 'Nome não cadastrado 😢️'}</h1>
                        <p>${user.bio ?? 'Bio não cadastrada 😢️'}</p>
                      </div>
                      <div class="containerInfoUsers">
                        <div class="infoUsers">
                            <div class="containerIcon">
                              <i class="fa-solid fa-user-group"></i>
                              <p>Seguidores</p>
                            </div>
                            <div class="text text1">
                              <p>${user.followers}</p>
                            </div>
                        </div>
                        <div class="infoUsers">
                            <div class="containerIcon">
                              <i class="fa-solid fa-user-group"></i>
                              <p>Seguindo</p>
                            </div>
                            <div class="text text2">
                              <p>${user.following}</p>
                            </div>
                        </div>
                      </div>
                    </div>`

    this.userProfile.innerHTML = infoRender

    /* Repositories*/ 

    let repositoriesItens = ''
    user.repositories.forEach(repos => repositoriesItens +=  `<li>
                                                                <a href="${repos.html_url}" target="_blank">
                                                                  ${repos.name}
                                                                <div class="containerInfoRepo">
                                                                  <div class="infoRepo">
                                                                    <i class="fa-solid fa-utensils"></i>
                                                                    <div class="countInfoRepo">
                                                                      ${repos.forks}
                                                                    </div>
                                                                  </div>
                                                                  <div class="infoRepo">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <div class="countInfoRepo">
                                                                      ${repos.stargazers_count}
                                                                    </div>
                                                                  </div>
                                                                  <div class="infoRepo">
                                                                    <i class="fa-solid fa-eye"></i>
                                                                    <div class="countInfoRepo">
                                                                      ${repos.watchers}
                                                                    </div>
                                                                  </div>
                                                                  <div class="infoRepo">
                                                                    <i class="fa-solid fa-desktop"></i>
                                                                    <div class="countInfoRepo">
                                                                      ${repos.language ?? 'sem linguagem'}
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                </a>
                                                              </li>`)


    let isRepositories = `<div class="repositories section">
                            <hr>
                            <h2>Repositórios</h2>
                            <ul>${repositoriesItens}</ul>
                          </div>`

    let isNotRepositories =  `<div class="repositories section">
                                <h1>Perfil sem repositórios cadastrados!</h1>
                              </div>`

    user.repositories.length > 0 ? this.userProfile.innerHTML += isRepositories : this.userProfile.innerHTML += isNotRepositories

    /* Activities */

    let activitiesItens = ''
    let message = ''
    let commits = ''

    user.activities.forEach((activity) =>{
      if(activity.payload.commits){
        commits = activity.payload.commits
        message = activity.payload.commits[0].message
        activitiesItens += `<li>${activity.repo.name}: <span>${message}</span></li>`
      }else{
        message = 'Sem commits'
      }
    })

    let activityRender = `<div class="containerActivity"> 
                            <hr>
                            <h2>Atividades</h2>
                            <ul>${activitiesItens}</ul>
                          </div>`

    commits.length > 0 ? this.userProfile.innerHTML += activityRender : ''
    
  },

  renderNotFound(){
    this.userProfile.innerHTML = `<div class="repositories section">
                                    <h3>Perfil de usuário não existente!</h3>
                                  </div>`
  },

}

export { screen }