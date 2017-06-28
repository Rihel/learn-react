export const ADD_TODO = 'ADD_TODO';
export const FILTER = 'FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_USER = 'UPDATE_USER';
let id = 0;

export const addTodo = (text) => ({
    id: id++,
    type: ADD_TODO,
    text
});

export const filter = (filter) => ({type: FILTER, filter});

export const toggleTodo = (id) => ({type: TOGGLE_TODO, id});
export const updateUser = (phone) => ({type: UPDATE_USER, phone});