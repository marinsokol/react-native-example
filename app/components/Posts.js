import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import { Card } from 'native-base';
import shallowCompare from 'react-addons-shallow-compare';
import list from '../styles/list';
import landing from '../styles/landing';

export default class extends PureComponent {
  static displayName = 'Posts'

  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.number, // eslint-disable-line
        id: PropTypes.number, // eslint-disable-line
        title: PropTypes.string, // eslint-disable-line
        body: PropTypes.string, // eslint-disable-line
        user: PropTypes.shape({
          name: PropTypes.string, // eslint-disable-line
          username: PropTypes.string, // eslint-disable-line
          website: PropTypes.string, // eslint-disable-line
          phone: PropTypes.string, // eslint-disable-line
          email: PropTypes.string, // eslint-disable-line
          id: PropTypes.number, // eslint-disable-line
        }), // eslint-disable-line
      })
    ).isRequired,
    goTo: PropTypes.func,
  }

  state = {}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  goToDetails = data => this.props.goTo('postDetails', data)

  renderRow = rowData => (
    <View style={list.item}>
      <View>
        <TouchableHighlight onPress={() => this.goToDetails(rowData)}>
          <Text style={landing.scrollTitle}>{rowData.title}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.goToDetails(rowData)}>
          <Text>{rowData.body}</Text>
        </TouchableHighlight>
      </View>
      <Image
        onPress={() => this.addToFavorites(rowData)}
        style={list.image}
        source={require('../../assets/images/ic_favorite_3x.png')}
      />
    </View>
  )

  render() {
    const { posts } = this.props;

    return (<View style={list.container}>
      <Card
        style={{ backgroundColor: 'lightblue' }}
        dataArray={posts}
        renderRow={this.renderRow}
      />
    </View>);
  }
}
