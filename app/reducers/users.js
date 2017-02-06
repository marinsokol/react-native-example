import { USERS } from '../constants/actionTypes.const';

export default function (state = [], action) {
  switch (action.type) {
    case USERS.add:
      return action.payload;
    default:
      return state;
  }
}
