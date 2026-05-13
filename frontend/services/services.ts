import axios from "axios";
const baseUrl = "http://localhost:8081";
const httpService = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default httpService;
