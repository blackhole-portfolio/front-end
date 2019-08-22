import axios from 'axios';

// Login endpoint connection

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