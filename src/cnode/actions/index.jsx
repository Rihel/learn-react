import {getData} from '../api';

export const TOGGLE_TAB = 'TOGGLE_TAB';
export const GET_TOPICS_DATA = 'GET_TOPICS_DATA';

export const toggleTab = (keyWord) => ({type: TOGGLE_TAB, keyWord});

export const getTopicsData = (data) => ({type: GET_TOPICS_DATA, data});

export const getTest = (id) => async(dispatch, getState) => {
    try {
        let response = await getData(`/topics`)
        await dispatch(getTopicsData(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
