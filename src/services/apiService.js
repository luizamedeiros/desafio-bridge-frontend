import axios from "axios"
const API_BASE_URL = "http://localhost:8090/calculate"

const apiService = (number) => {
    return axios.get(API_BASE_URL, {params: {input: number}})
}

export default apiService;