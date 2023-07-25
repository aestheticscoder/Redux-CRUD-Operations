import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
