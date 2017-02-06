import { USERS, ERRORS } from '../constants/actionTypes.const';

export const addUsersEpic = action$ =>
  action$.ofType(USERS.start)
    .switchMap(action =>
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(res => ({
        type: USERS.add,
        payload: res,
      })
      )
    );
