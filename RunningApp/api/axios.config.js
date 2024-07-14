import axios from "axios";

export const instance = axios.create({
  baseURL: "https://communityproject.azurewebsites.net/api",
});
