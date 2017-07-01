import {
    getData,
    postData
} from '../api/api';
export const INIT_CITYS = 'INIT_CITYS';
export function getCitys() {
    return async dispatch => {
        try {
            let data = await getData('/api');
            dispatch(initCitys(citys));
        } catch (error) {
            console.log(error);
        }
    }
};

export const initCitys = (citys) => ({
    type: INIT_CITYS,
    citys
});