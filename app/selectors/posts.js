import { createSelector } from 'reselect';

const getPosts = state => state.posts;
const getUsers = state => state.users;
const getPostID = (state, props) => props.post.id;
const getFilter = (state, props) => props.filter;

export const getPostData = createSelector(
  [getPosts, getUsers, getFilter],
  (posts, users, filter) => {
    const postsList = [];

    posts.forEach((post) => {
      const user = users.find(single => single.id === post.userId);

      if (post.title.indexOf(filter.toLowerCase()) === -1 &&
          user.name.indexOf(filter) === -1) return;

      postsList.push({
        ...post,
        user,
      });
    });

    return postsList;
  }
);

export const getSinglePost = createSelector(
  [getPosts, getUsers, getPostID],
  (posts, users, id) => {
    const post = posts.find(single => id === single.id);
    const user = users.find(single => single.id === post.userId);

    return {
      ...post,
      user,
    };
  }
);
