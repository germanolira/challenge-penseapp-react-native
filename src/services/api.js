import axios from "axios";

const api = axios.create({
  // Coloque o seu IP aqui
  baseURL: "http://{seu ip aqui}:3333/products",
});

export default api;
