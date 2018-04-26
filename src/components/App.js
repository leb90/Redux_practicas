import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TabBar from './TabBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import configureStore from '../configureStore'

import Background from '../img/football.png'

let store = configureStore()

const style = {
  backgroundImage: `url(${Background})`
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <MuiThemeProvider>
            <div style={style}>
              <NavBar/>
              {<TabBar/>}
            </div>  
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
