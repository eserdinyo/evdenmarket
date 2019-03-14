import axios from 'axios'

const httpProduct = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default httpProduct
