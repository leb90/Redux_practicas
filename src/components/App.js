import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TabBar from './TabBar'
import configureStore from '../configureStore'

let store = configureStore()

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <TabBar/>
          </div>
        </Provider>
    );
  }
}

export default App;
