import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import shallowCompare from 'react-addons-shallow-compare';
import main from '../styles/main';

export default class extends PureComponent {
  static displayName = 'Loading'

  static propTypes = {
    store: PropTypes.shape({
      users: PropTypes.array, // eslint-disable-line
      posts: PropTypes.array, // eslint-disable-line
      albums: PropTypes.array, // eslint-disable-line
      errors: PropTypes.string, // eslint-disable-line
      status: PropTypes.string, // eslint-disable-line
    }),
    loadPosts: PropTypes.func,
    loadAlbums: PropTypes.func,
    loadUsers: PropTypes.func,
    goTo: PropTypes.func,
  }

  state = {
    color: 'red',
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  componentWillReceiveProps(nextProps) {
    const { users, posts, albums } = nextProps.store;

    if (posts.length > 0 && albums.length === 0) {
      this.props.loadAlbums();
      this.setState({ color: 'blue' });
      return;
    }

    if (albums.length > 0 && users.length === 0) {
      this.props.loadUsers();
      this.setState({ color: 'green' });
      return;
    }

    if (users.length > 0) this.props.goTo('landing');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { status } = this.props.store;
    const { color } = this.state;

    return (<View style={main.container}>
      <ActivityIndicator
        style={{ padding: 10 }}
        size="large"
      />
      <Text style={main[color]}>{status}</Text>
    </View>);
  }
}
