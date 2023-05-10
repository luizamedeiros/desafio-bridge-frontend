import axios from "axios";
const API_BASE_URL =
  "https://desafio-bridge-backend-production.up.railway.app/calculate";

const apiService = (number) => {
  return axios.get(API_BASE_URL, { params: { input: number } });
};

export default apiService;
