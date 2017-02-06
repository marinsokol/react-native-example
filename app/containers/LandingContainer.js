import { connect } from 'react-redux';
import Landing from '../screens/Landing';

const getLastPosts = posts => posts.slice(-5);

const mapStateToProps = state => ({
  posts: getLastPosts(state.posts),
});

export default connect(
  mapStateToProps,
)(Landing);
