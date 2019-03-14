import axios from 'axios'

const httpProduct = axios.create({
  baseURL: 'https://hidden-falls-66444.herokuapp.com/'
})

export default httpProduct
