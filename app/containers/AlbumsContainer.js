import { connect } from 'react-redux';
import Albums from '../components/Albums';
import { getAlbumData } from '../selectors/albums';

const mapStateToProps = (state, props) => ({
  albums: getAlbumData(state, props),
});

export default connect(
  mapStateToProps,
)(Albums);
