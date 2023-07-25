// services/userService.js
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace this with your backend API base URL

export const fetchUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

export const createUser = (userData) => {
  return axios.post(`${BASE_URL}/users`, userData);
};

export const updateUser = (userId, userData) => {
  return axios.put(`${BASE_URL}/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/users/${userId}`);
};
