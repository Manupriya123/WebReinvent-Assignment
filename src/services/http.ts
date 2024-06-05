import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

export const login = (email: string, password: string) =>
  api.post("/login", { email, password });
export const register = (email: string, password: string) =>
  api.post("/register", { email, password });
export const fetchUsers = () => api.get("/users");

export default api;
