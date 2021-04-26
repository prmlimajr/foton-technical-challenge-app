import axios from 'axios';
import {LOCALHOST, PORT} from '@env';

const api = axios.create({
  baseURL: `http://${LOCALHOST}:${PORT}/`,
});

export default api;
