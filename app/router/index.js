import React, { PureComponent } from 'react';
import { Navigator } from 'react-native';
import shallowCompare from 'react-addons-shallow-compare';
import routes from '../constants/routes';
import LoadingContainer from '../containers/LoadingContainer';
import LandingContainer from '../containers/LandingContainer';
import Home from '../screens/Home';
import AlbumDetailsContainer from '../containers/AlbumDetailsContainer';
import PostDetailsContainer from '../containers/PostDetailsContainer';

export default class extends PureComponent {
  static displayName = 'Router'

  state = {}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  bindNavigator = (nav) => { this.nav = nav; }

  configScene = () => Navigator.SceneConfigs.FloatFromRight

  newRoute = (data, props) => {
    if (!props) {
      this.nav.push(routes[data]);
      return;
    }

    this.nav.push({
      ...routes[data],
      props,
    });
  }

  backRoute = () => this.nav.pop()

  renderScreen = (route) => {
    switch (route.name) {
      case 'loading':
        return <LoadingContainer goTo={this.newRoute} />;
      case 'landing':
        return <LandingContainer goTo={this.newRoute} />;
      case 'home':
        return <Home goTo={this.newRoute} tab={route.props} />;
      case 'albumDetails':
        return <AlbumDetailsContainer goBack={this.backRoute} album={route.props} />;
      case 'postDetails':
        return <PostDetailsContainer goBack={this.backRoute} post={route.props} />;
      default:
        return <LandingContainer goTo={this.newRoute} />;
    }
  }

  render() {
    return (<Navigator
      initialRoute={routes.loading}
      renderScene={this.renderScreen}
      ref={this.bindNavigator}
      configureScene={this.configScene}
    />);
  }
}
