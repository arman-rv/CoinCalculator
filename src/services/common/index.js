import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const apiCall = axios.create({
  baseURL,
});

const onSuccess = (response) => {
  return response;
};

apiCall.interceptors.response.use(onSuccess);


export { apiCall };
