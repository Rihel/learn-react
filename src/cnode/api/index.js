import axios from 'axios';
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
export const getData = (url, params) => (axios.get(url, params))
export const postData = (url, params) => (axios.post(url, params))