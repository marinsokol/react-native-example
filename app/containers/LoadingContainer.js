import { connect } from 'react-redux';
import Loading from '../screens/Loading';
import { loadPosts, loadUsers, loadAlbums } from '../actions';

const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => {
    dispatch(loadPosts());
  },
  loadUsers: () => {
    dispatch(loadUsers());
  },
  loadAlbums: () => {
    dispatch(loadAlbums());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
