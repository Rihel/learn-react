import {getData, postData} from '../api/api';
export const USERINFO_UPDATE = 'USERINFO_UPDATE';
export const update = (data) => ({type: USERINFO_UPDATE, data});