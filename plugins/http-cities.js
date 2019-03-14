import axios from 'axios'

const httpCities = axios.create({
  baseURL: "https://hidden-falls-66444.herokuapp.com/"

})

export default httpCities
