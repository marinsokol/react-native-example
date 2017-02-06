import { combineEpics } from 'redux-observable';
import { addPostsEpic } from './posts';
import { addAlbumsEpic } from './albums';
import { addUsersEpic } from './users';
import { addFavoritesEpic } from './favorites';

export default combineEpics(
  addPostsEpic,
  addAlbumsEpic,
  addUsersEpic,
  addFavoritesEpic,
);
