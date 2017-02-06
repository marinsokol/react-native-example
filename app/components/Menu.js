import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import shallowCompare from 'react-addons-shallow-compare';
import menu from '../styles/menu';

export default class extends PureComponent {
  static displayName = 'Menu'

  static propTypes = {
    route: PropTypes.string,
    goTo: PropTypes.func,
  }

  state = {}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  doPress = data => this.props.goTo(data);

  render() {
    const { route } = this.props;
    let favButton = null;
    let stylesAlbums = {};
    let stylesPosts = {};
    let stylesFavs = {};
    if (route === 'albums') stylesAlbums = menu.active;
    if (route === 'posts') stylesPosts = menu.active;
    if (route === 'favorites') stylesFavs = menu.active;

    if (route !== 'home') {
      favButton = (<TouchableHighlight
        onPress={() => this.doPress('favorites')}
        underlayColor={'red'}
      >
        <Text style={stylesFavs}>Favorites</Text>
      </TouchableHighlight>);
    }

    return (<View style={menu.main}>
      <TouchableHighlight
        onPress={() => this.doPress('albums')}
        underlayColor={'red'}
      >
        <Text style={stylesAlbums}>Albums</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => this.doPress('posts')}
        underlayColor={'red'}
      >
        <Text style={stylesPosts}>Posts</Text>
      </TouchableHighlight>
      {favButton}
    </View>);
  }
}
