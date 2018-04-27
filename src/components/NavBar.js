import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Dehaze from 'material-ui/svg-icons/image/dehaze';

import {fullWhite} from 'material-ui/styles/colors';
class AppBarIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolling: false,
      open: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {

    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {

    return (
      <div>
        <AppBar
          style={{
            backgroundColor: this.state.scrolling 
              ? '#377727' 
              : 'rgba(16, 72, 13, 0)',
            borderWidth: 0,
            position: this.state.scrolling
              ? 'fixed'
              : 'relative',
            top: 0,
            width: '100vw',
            zIndex: 1
          }}
          showMenuIconButton={false}
          titleStyle={{textAlign:'left',color: this.state.scrolling 
            ? '#ffffff' 
            : '#000000'}}
          iconElementRight={<Dehaze style={{margin: 10}} color={this.state.scrolling 
            ? '#ffffff' 
            : '#000000'} />}

          zDepth='none'
          onScroll={this.handleScroll}
          title="PapiMake"
          onRightIconButtonClick={()=>this.handleToggle()}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default AppBarIcon;