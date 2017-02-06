import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import shallowCompare from 'react-addons-shallow-compare';
import landing from '../styles/landing';
import main from '../styles/main';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.number, // eslint-disable-line
        id: PropTypes.number, // eslint-disable-line
        title: PropTypes.string, // eslint-disable-line
        body: PropTypes.string, // eslint-disable-line
      })
    ).isRequired,
    goTo: PropTypes.func,
  }

  state = {}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  getItems = () => {
    const { posts } = this.props;

    return posts.map((post, index) => (
      <View
        key={index}
        style={landing.scrollItem}
      >
        <Text style={landing.scrollTitle}>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    ));
  }

  goHome = (data, props) => this.props.goTo(data, props);

  render() {
    return (<View>
      <View style={main.header}>
        <TouchableHighlight onPress={() => this.goHome('home', 'posts')}>
          <Text> Posts </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.goHome('home', 'albums')}>
          <Text> Albums </Text>
        </TouchableHighlight>
      </View>
      <ScrollView
        style={landing.scrollView}
      >
        {this.getItems()}
      </ScrollView>
    </View>);
  }
}
