import { combineReducers } from 'redux';
import albums from './albums';
import posts from './posts';
import errors from './errors';
import users from './users';
import status from './status';

export default combineReducers({
  albums,
  posts,
  users,
  errors,
  status,
});
