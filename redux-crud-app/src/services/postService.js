// services/postService.js
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace this with your backend API base URL

export const fetchPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const createPost = (postData) => {
  return axios.post(`${BASE_URL}/posts`, postData);
};

export const updatePost = (postId, postData) => {
  return axios.put(`${BASE_URL}/posts/${postId}`, postData);
};

export const deletePost = (postId) => {
  return axios.delete(`${BASE_URL}/posts/${postId}`);
};
