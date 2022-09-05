import React from 'react';
import Router from './src/Router.js';
import {Provider} from 'react-redux';
import {store} from './src/redux/store.js';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
