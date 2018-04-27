import React, { Component } from 'react';
import {connect} from 'react-redux';
import SuperHeroesList from './SHComponent'
import * as action from '../actions/action'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Filter5 from 'material-ui/svg-icons/image/filter-5';
import Filter6 from 'material-ui/svg-icons/image/filter-6';
import Filter7 from 'material-ui/svg-icons/image/filter-7';
import Filter9 from 'material-ui/svg-icons/image/filter-9';
import Create from 'material-ui/svg-icons/content/create';
import {fullWhite} from 'material-ui/styles/colors';

var showInfo
const styles = {
  button: {
    margin: 12,
  },
  body: {
    textAlign: "center",
    marginTop: "50px",
    but:{
      marginTop: "60px"
    }
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

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
      <div style={styles.body}>
        <RaisedButton
          label="Crea Equipo"
          labelColor={fullWhite}
          labelPosition="before"
          backgroundColor="#377727"
          icon={<Filter5 color={fullWhite} /> }
          style={styles.button}
          onClick={()=> this.props.selected_tab('TAB_1')}
        />
        <RaisedButton
          label="Crea Equipo"
          labelColor={fullWhite}
          labelPosition="before"
          backgroundColor="#377727"
          icon={<Filter6 color={fullWhite} /> }
          style={styles.button}
          onClick={()=> this.props.selected_tab('TAB_2')}
        />
        <RaisedButton
          label="Crea Equipo"
          labelColor={fullWhite}
          labelPosition="before"
          backgroundColor="#377727"
          icon={<Filter7 color={fullWhite} /> }
          style={styles.button}
          onClick={()=> this.props.selected_tab('TAB_3')}
        />
        <RaisedButton
          label="Crea Equipo"
          labelColor={fullWhite}
          labelPosition="before"
          backgroundColor="#377727"
          icon={<Filter9 color={fullWhite} /> }
          style={styles.button}
          onClick={()=> this.props.selected_tab('TAB_4')}
        />
        <RaisedButton
          label="Crea Equipo Personalizado"
          labelColor={fullWhite}
          labelPosition="before"
          backgroundColor="#377727"
          icon={<Create color={fullWhite} /> }
          style={styles.button}
          onClick={()=> this.props.selected_tab('TAB_5')}
        />
        <div style={styles.body.but}>
          <RaisedButton label="Volver" backgroundColor="#FF2D00" labelColor={fullWhite} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {tabsId: state.tabId}
}

export default connect(mapStateToProps,action)(TabBar);