import { connect } from 'react-redux';
import PostDetails from '../screens/PostDetails';
import { getSinglePost } from '../selectors/posts';

const mapStateToProps = (state, props) => ({
  post: getSinglePost(state, props),
});

export default connect(
  mapStateToProps,
)(PostDetails);
