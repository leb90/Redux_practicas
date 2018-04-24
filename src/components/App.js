import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import Reducers from '../reducers/reducers.js'
import SuperHeroesList from '../SHComponent'

class App extends Component {
  render() {
    return (
        <Provider store={createStore(Reducers)}>
          <div>
            <SuperHeroesList/>
          </div>
        </Provider>
    );
  }
}

export default App;
