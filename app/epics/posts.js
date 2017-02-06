import { POSTS, ERRORS } from '../constants/actionTypes.const';

export const addPostsEpic = action$ =>
  action$.ofType(POSTS.start)
    .switchMap(action =>
      fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(res => ({
        type: POSTS.add,
        payload: res,
      })
      )
    );
