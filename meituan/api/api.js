import axios from 'axios';

axios.defaults.baseURL = '/api';

export const getData = (...args) => axios.get(...args)
export const postData = (...args) => axios.post(...args)