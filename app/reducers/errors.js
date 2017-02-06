import { ERRORS } from '../constants/actionTypes.const';

export default function (state = '', action) {
  switch (action.type) {
    case ERRORS.add:
      return action.payload;
    default:
      return state;
  }
}
