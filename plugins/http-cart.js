import axios from "axios";

const httpCart = axios.create({
  baseURL: "https://hidden-falls-66444.herokuapp.com/"
});

export default httpCart;
