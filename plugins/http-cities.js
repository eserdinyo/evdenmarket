import axios from 'axios'

const httpCities = axios.create({
  baseURL: "http://localhost:8081/"

})

export default httpCities
