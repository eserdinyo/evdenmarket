import axios from "axios";

const httpAuth = axios.create({
  baseURL: "https://hidden-falls-66444.herokuapp.com/"
});

export default httpAuth;
