import { baseUrl, repositoriesQuantity } from '../variables.js'

const getActivities = async (userName) => {

  const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
  return await response.json()
  
}

export { getActivities }