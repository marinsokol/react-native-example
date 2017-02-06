import { FAVORITES, ERRORS } from '../constants/actionTypes.const';

export const addFavoritesEpic = action$ =>
  action$.ofType(FAVORITES.start)
    .switchMap(action =>
      fetch('http://localhost:3000/favorites')
      .then(response => response.json())
      .then(res => ({
        type: FAVORITES.add,
        payload: res,
      })
      )
    );
