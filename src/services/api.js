import axios from "axios";

const api = axios.create({
  // Coloque o seu IP aqui
  baseURL: "http://{192.168.3.63}:3333/products",
});

export default api;
