import {
    USER_UNAUTHORIZED ,
    LOGIN_START       ,
    LOGIN_SUCCESS     ,
    LOGOUT            ,
    REG_START         ,
    REG_SUCCESS       ,
    FETCH_DATA_START  ,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    GET_USERS_START   ,
    GET_USERS_SUCCESS ,
    GET_USERS_FAILURE ,
    ADD_START         ,
    ADD_SUCCESS       ,
    DELETE_START      ,
    DELETE_SUCCESS    ,
    DELETE_FAILURE    ,
    EDIT_START        ,
    EDIT_SUCCESS
} from '../actions/index';

const initialState = {
    notes: [] ,
    users: [] ,
    loggedIn: false ,
    loggingIn: false ,
    registering: false ,
    token: localStorage.getItem('token') ,
    fetchingNotes: false ,
    gettingUsers: false ,
    addingNotes: false ,
    updatingNotes: false ,
    deletingNotes: false ,
    error: null ,
    errorStatusCode: null 
};

