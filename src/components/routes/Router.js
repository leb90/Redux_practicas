import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';
import App from '../App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import configureStore from '../../configureStore'
import { Provider } from 'react-redux';

import Login from '../Login/Login';
import Auth from '../../lib/Auth/Auth';

const Root = (Data) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      Auth(Data) ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login'
        }}/>
      )
    )}/>
  )

  let store = configureStore()

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
          <Router>
              <div>
                  <Route exact path="/login" component={Login} />  
                  <PrivateRoute path="/list" component={App} />
              </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  
}
  
  export default Root;
  
  