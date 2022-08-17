import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.BASE_URL,
});
