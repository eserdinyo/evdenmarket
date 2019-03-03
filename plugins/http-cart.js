import axios from "axios";

const httpCart = axios.create({
  baseURL: "http://localhost:8081/"
});

export default httpCart;
