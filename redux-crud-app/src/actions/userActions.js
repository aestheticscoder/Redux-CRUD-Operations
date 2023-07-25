
import axios from 'axios';

// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

// Action Creators
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    axios
      .get('/api/users')
      .then((response) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      });
  };
};

export const createUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });

    axios
      .post('/api/users', userData)
      .then((response) => {
        dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
      });
  };
};

export const updateUser = (userId, userData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });

    axios
      .put(`/api/users/${userId}`, userData)
      .then((response) => {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
      });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });

    axios
      .delete(`/api/users/${userId}`)
      .then(() => {
        dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
      })
      .catch((error) => {
        dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
      });
  };
};
