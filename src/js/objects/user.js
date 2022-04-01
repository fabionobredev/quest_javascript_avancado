const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  followers: '',
  following: '',
  repositories: [],
  activities: [],

  setUser(gitHubUser){

    this.avatarUrl = gitHubUser.avatar_url
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.name = gitHubUser.name
    this.followers = gitHubUser.followers
    this.following = gitHubUser.following

  },

  setRepositories(gitHubRepositories){
    this.repositories = gitHubRepositories
  },

  setActivities(gitHubActivities){
    this.activities = gitHubActivities
  }

}

export {user} 