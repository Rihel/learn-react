import axios from 'axios';

axios.defaults.baseURL = '/api';

export const getData = async(...args) =>await axios.get(...args)
export const postData = async(...args) =>await axios.post(...args)