import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {
  Header,
  Button,
  Title,
} from 'native-base';
import shallowCompare from 'react-addons-shallow-compare';
import details from '../styles/details';

export default class extends PureComponent {
  static displayName = 'AlbumDetails'

  static propTypes = {
    album: PropTypes.shape({
      id: PropTypes.number, // eslint-disable-line
      title: PropTypes.string, // eslint-disable-line
      userId: PropTypes.number, // eslint-disable-line
      user: PropTypes.shape({
          name: PropTypes.string, // eslint-disable-line
          username: PropTypes.string, // eslint-disable-line
          website: PropTypes.string, // eslint-disable-line
          phone: PropTypes.string, // eslint-disable-line
          email: PropTypes.string, // eslint-disable-line
          id: PropTypes.number, // eslint-disable-line
        }), // eslint-disable-line
    }),
    goBack: PropTypes.func,
  }

  state = {}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  goBack = () => this.props.goBack()

  render() {
    const { album } = this.props;

    return (<View style={details.main}>
      <Header style={{ backgroundColor: '#F26969' }}>
        <Button
          transparent
          onPress={() => this.goBack()}
        >
          <Text> Back </Text>
        </Button>
        <Title>Details</Title>
      </Header>
      <View style={details.container}>
        <Text style={details.title}> Title: {album.title} </Text>
        <Text style={details.user}> User: {album.user.name} </Text>
        <Image
          source={require('../../assets/images/ic_favorite_3x.png')}
        />
      </View>
    </View>);
  }
}
