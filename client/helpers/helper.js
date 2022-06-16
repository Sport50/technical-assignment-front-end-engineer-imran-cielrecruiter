import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5200/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getArticals = async () => {
  return instance.get('/artical');
}