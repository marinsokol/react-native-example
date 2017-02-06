import { POSTS } from '../constants/actionTypes.const';

export default function (state = [], action) {
  switch (action.type) {
    case POSTS.add:
      return action.payload;
    default:
      return state;
  }
}
