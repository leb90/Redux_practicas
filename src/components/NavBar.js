import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class AppBarIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolling: false
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

  render() {

    return (
      <AppBar
        style={{
          backgroundColor: '#002104',
          borderWidth: 0,
          position: this.state.scrolling
            ? 'fixed'
            : 'relative',
          top: 0,
          width: '100vw',
          zIndex: 1
        }}
        onScroll={this.handleScroll}
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}

export default AppBarIcon;