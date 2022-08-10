import axios from "axios";
const API_BASE_URL = "https://dbb-22.herokuapp.com/calculate";

const apiService = (number) => {
  return axios.get(API_BASE_URL, { params: { input: number } });
};

export default apiService;
