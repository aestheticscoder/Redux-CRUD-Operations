
import axios from 'axios';

// Action Types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

// Action Creators
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    axios
      .get('/api/posts')
      .then((response) => {
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
      });
  };
};

export const createPost = (postData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });

    axios
      .post('/api/posts', postData)
      .then((response) => {
        dispatch({ type: CREATE_POST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: CREATE_POST_FAILURE, payload: error.message });
      });
  };
};

export const updatePost = (postId, postData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_POST_REQUEST });

    axios
      .put(`/api/posts/${postId}`, postData)
      .then((response) => {
        dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_POST_FAILURE, payload: error.message });
      });
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });

    axios
      .delete(`/api/posts/${postId}`)
      .then(() => {
        dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
      })
      .catch((error) => {
        dispatch({ type: DELETE_POST_FAILURE, payload: error.message });
      });
  };
};
