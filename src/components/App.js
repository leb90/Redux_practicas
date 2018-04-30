import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TabBar from './TabBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import configureStore from '../configureStore'
import '../App.css';


import Background from '../img/football.png'
import BackgroundD from '../img/football-2.png'



const style = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  height: '600px',

}
const styleD = {
  backgroundImage: `url(${BackgroundD})`,
  height: '600px',
}
class App extends Component {
  render() {
    return (
        
      <div>  
        <div style={style}>
          <NavBar/>
          <TabBar/>
        </div>
        <div style={styleD}>
          
        </div>  
      </div>

    );
  }
}

export default App;
