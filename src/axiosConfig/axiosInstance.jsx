import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  //   headers: {
  //     Authorization: `Bearer jwt`,
  //     "x-api-key": "asfkjasui237878t",
  //   },
  //   params: {
  //     api: "Axios",
  //     apiKey: "asfkjasui237878t",
  //   },
});

// axiosInstance.interceptors.request.use((req) => {});
// axiosInstance.interceptors.response.use((req) => {});

export default axiosInstance;
