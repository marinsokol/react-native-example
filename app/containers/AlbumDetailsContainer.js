import { connect } from 'react-redux';
import AlbumDetails from '../screens/AlbumDetails';
import { getSingleAlbum } from '../selectors/albums';

const mapStateToProps = (state, props) => ({
  album: getSingleAlbum(state, props),
});

export default connect(
  mapStateToProps,
)(AlbumDetails);
