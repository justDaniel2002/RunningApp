import axios from "axios";

export const instance = axios.create({
  baseURL: "https://communityproject.azurewebsites.net/api",
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
}