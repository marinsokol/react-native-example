import { ALBUMS } from '../constants/actionTypes.const';

export default function (state = [], action) {
  switch (action.type) {
    case ALBUMS.add:
      return action.payload;
    default:
      return state;
  }
}
