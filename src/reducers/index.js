// Import all reducers

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


// Set initial state

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

// Return reducers

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true,
          loggedIn: false  
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          loggedIn: true,
          token: action.payload
        };
        case LOGOUT:
         return {
           user:[],
           notes: [],
           token: null,  
           loggedIn: false
         }
        case REG_SUCCESS:
        return {
          ...state
        }
      case FETCH_DATA_START:
        return {
          ...state,
          fetchingNotes: true,
          loggedIn: true  
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: "",
          errorStatusCode: null,
          fetchingNotes: false,
          notes: action.payload
        };

        case GET_USERS_START:
          return {
            ...state,
            gettingUsers: true
          }

          case GET_USERS_SUCCESS:
            return {
              ...state,
              users: action.payload 
            }

        case ADD_START:
        return {
          ...state,
          addingNotes: true,
          loggedIn: true 
        };
    
        case ADD_SUCCESS:
        return {
          ...state,
          addingNotes: false,
          error:'',
          notes: [...action.payload.notes],
          loggedIn: true   
        };

      case DELETE_START:
        return {
          ...state,
          deletingNotes: true,
          loggedIn: true   
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          deletingNotes: false,
          error: "",
          errorStatusCode: null,
          notes: [...action.payload],
          loggedIn: true   
        };

        case EDIT_START:
          return {
            ...state,
            updatingNotes: true,
            loggedIn: true   
          }

          case EDIT_SUCCESS:
            return {
              ...state,
              updatingNotes: false,
              notes: [...action.payload],
              loggedIn: true   
            }

      case USER_UNAUTHORIZED:
        return {
          ...state,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status,
          fetchingNotes: false,
          loggedIn: false   
        };
  
      default:
        return state;
    }
  };