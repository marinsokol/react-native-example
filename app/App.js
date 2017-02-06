import 'rxjs';
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import configStore from './store';

const store = configStore();

export default class extends PureComponent {
  static displayName = 'App'

  state = {}

  render() {
    return (<Provider store={store} >
      <Router />
    </Provider>);
  }
}
