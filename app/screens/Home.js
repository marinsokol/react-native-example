import React, { PureComponent, PropTypes } from 'react';
import { View } from 'react-native';
import {
  Header,
  Tabs,
  Input,
  InputGroup,
} from 'native-base';
import shallowCompare from 'react-addons-shallow-compare';
import PostsContainer from '../containers/PostsContainer';
import AlbumsContainer from '../containers/AlbumsContainer';

export default class extends PureComponent {
  static displayName = 'Home'

  static propTypes = {
    tab: PropTypes.string.isRequired,
    goTo: PropTypes.func,
  }

  state = {
    filter: '',
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  getInitPage = () => {
    const { tab } = this.props;

    switch (tab) {
      case 'posts': return 0;
      case 'albums': return 1;
      default: return 0;
    }
  }

  filterChange = filter => this.setState({ filter })

  rerouteTo = (data, props) => this.props.goTo(data, props);

  render() {
    const { filter } = this.state;

    return (<View>
      <Header style={{ backgroundColor: '#F26969' }}>
        <InputGroup
          borderType={'rounded'}
        >
          <Input
            placeholder={'Type your search params'}
            value={filter}
            onChangeText={this.filterChange}
          />
        </InputGroup>
      </Header>
      <Tabs
        initialPage={this.getInitPage()}
        onChangeTab={this.tabChange}
      >
        <PostsContainer tabLabel={'Posts'} filter={filter} goTo={this.rerouteTo} />
        <AlbumsContainer tabLabel={'Albums'} filter={filter} goTo={this.rerouteTo} />
      </Tabs>
    </View>);
  }
}
