import { createSelector } from 'reselect';

const getAlbums = state => state.albums;
const getUsers = state => state.users;
const getAlbumID = (state, props) => props.album.id;
const getFilter = (state, props) => props.filter;

export const getAlbumData = createSelector(
  [getAlbums, getUsers, getFilter],
  (albums, users, filter) => {
    const albumsList = [];

    albums.forEach((album) => {
      const user = users.find(single => single.id === album.userId);

      if (album.title.indexOf(filter.toLowerCase()) === -1 &&
          user.name.indexOf(filter) === -1) return;

      albumsList.push({
        ...album,
        user,
      });
    });

    return albumsList;
  }
);

export const getSingleAlbum = createSelector(
  [getAlbums, getUsers, getAlbumID],
  (albums, users, id) => {
    const album = albums.find(single => id === single.id);
    const user = users.find(single => single.id === album.userId);

    return {
      ...album,
      user,
    };
  }
);
