import axios from 'axios';

// Login axios call

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    axios.post("https://blackhole-backend.herokuapp.com/api/auth/login", creds)
        .then( res => {
            console.log(res.data)

            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user_id', res.data.user.id)

            dispatch({ type: LOGIN_SUCCESS , payload: res.data.token })

        });
};

// Register axios call

export const REG_START = 'REG_START';
export const REG_SUCCESS = 'REG_SUCCESS';

export const register = user => dispatch => {
    dispatch({ type: REG_START });

    axios.post("https://blackhole-backend.herokuapp.com/api/auth/register", user)
        .then( res => {
            dispatch({ type: REG_SUCCESS })
            dispatch(getUsers());
        })
        .catch( err => console.log(err));
};

// Get Users axios call

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = () => dispatch => {
    dispatch({ type: GET_USERS_START });
    
    axios
        .get("https://blackhole-backend.herokuapp.com/users", {
            headers: { Authorization: localStorage.getItem("token") }
        })
        .then( res => {
            dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
        })
        .catch( err => console.log(err));
};

// Logout axios call 

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
}

// Fetch Data axios call

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = (user_id) => dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios
    .get(`https://blackhole-backend.herokuapp.com/messages/users/${user_id}`, {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then( res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch( err => {
        if (err.response.status === 403) {
            dispatch({ type: USER_UNAUTHORIZED, payload: err.response});
        } else {
            dispatch({ type: DELETE_FAILURE, payload: err.response});
        }
    });
};

// Add Note axios call

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS='ADD_SUCCESS';

export const addNote = newNote => dispatch => {
  dispatch({ type: ADD_START });

  return axios
    .post('https://blackhole-backend.herokuapp.com/postmessage', newNote)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err));
};

// Delete Note axios call

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteNotes = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(` https://blackhole-backend.herokuapp.com/delmessage/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('This is an error', err);
    });
};

// Edit Notes axios call

export const EDIT_START = 'EDIT_START';
export const EDIT_SUCCESS='EDIT_SUCCESS';

export const updateNotes = note => dispatch => {
  dispatch({ type: EDIT_START });
  axios
    .put(`https://blackhole-backend.herokuapp.com/updatemessage/${note.id}`, note, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: EDIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
    });
};