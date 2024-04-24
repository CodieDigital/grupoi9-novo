import axios from "axios";

const siteUrl = "https://www.papelparamechas.com.br";

const apiURL = process.env.apiURL;
const painelURL = process.env.painelURL;

const api = axios.create({
  baseURL: apiURL,
});

const pathsApi = {
  apiURL,
  projectName: "Papel para mechas",
  base: painelURL,
  uploads: painelURL + "uploads/",
  file: painelURL + "arquivos/Portfolio/",
  service: painelURL + "imagens/Servico/",
  product: painelURL + "imagens/Produto/",
  portfolio: painelURL + "imagens/Paginas/",
  blogs: "",
};

export { api, apiURL, pathsApi, painelURL, siteUrl };
