import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { getPostData } from '../selectors/posts';

const mapStateToProps = (state, props) => ({
  posts: getPostData(state, props),
});

export default connect(
  mapStateToProps,
)(Posts);
