import axios from "axios";

const API_URL = "https://reqres.in/api";

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users?page=2`);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; 
  }
};
