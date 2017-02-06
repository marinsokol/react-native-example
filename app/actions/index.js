import { POSTS, ALBUMS, USERS } from '../constants/actionTypes.const';

export const loadPosts = () => ({
  type: POSTS.start,
  payload: {
    message: 'Loading posts',
  },
});

export const loadUsers = () => ({
  type: USERS.start,
  payload: {
    message: 'Loading users',
  },
});

export const loadAlbums = () => ({
  type: ALBUMS.start,
  payload: {
    message: 'Loading albums',
  },
});
