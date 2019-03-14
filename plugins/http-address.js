import axios from "axios";

const httpAuth = axios.create({
  baseURL: "http://localhost:8081/"
});

export default httpAuth;
