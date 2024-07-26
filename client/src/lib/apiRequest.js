import axios from "axios";

const apiRequest = axios
  .create({
    // baseURL: "http://localhost:8800/api",
    baseURL: "https://realestate2023-a4c53d4146f3.herokuapp.com/api/",
    withCredentials: true,
  })

export default apiRequest;
