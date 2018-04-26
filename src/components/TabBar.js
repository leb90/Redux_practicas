import React, { Component } from 'react';
import {connect} from 'react-redux';
import SuperHeroesList from './SHComponent'
import * as action from '../actions/action'
var showInfo

class TabBar extends Component {

  
  render() {
    
    console.log(this.props)
    if(this.props.tabsId === 'TAB_1'){
      showInfo = <SuperHeroesList/>
    }else if(this.props.tabsId === 'TAB_2'){
      showInfo = 'Info del tab 2'
    }else if(this.props.tabsId === 'TAB_3'){
      showInfo = 'Info del tab 3'
    }
    return (
      <div>

        <button onClick={()=> this.props.selected_tab('TAB_1')}>Tab1
        </button>

        <button onClick={()=> this.props.selected_tab('TAB_2')}>Tab2
        </button>

        <button onClick={()=> this.props.selected_tab('TAB_3')}>Tab3
        </button>

        <div>{showInfo}</div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {tabsId: state.tabId}
}

export default connect(mapStateToProps,action)(TabBar);