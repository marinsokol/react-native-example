import { ALBUMS, ERRORS } from '../constants/actionTypes.const';

export const addAlbumsEpic = action$ =>
  action$.ofType(ALBUMS.start)
    .switchMap(action =>
      fetch('http://localhost:3000/albums')
      .then(response => response.json())
      .then(res => ({
        type: ALBUMS.add,
        payload: res,
      })
      )
    );
