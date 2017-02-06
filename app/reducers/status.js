import { USERS, POSTS, ALBUMS } from '../constants/actionTypes.const';

export default function (state = '', action) {
  switch (action.type) {
    case USERS.start:
    case POSTS.start:
    case ALBUMS.start:
      return action.payload.message;
    default:
      return state;
  }
}
