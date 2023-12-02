import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return token;
  }
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const client = axios.create({
  baseURL: API_URL,
  headers: { Authorization: getAuthorizationHeader() }
});

export default client;
