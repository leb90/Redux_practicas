import React, { Component } from 'react';
import {connect} from 'react-redux'

class SHComponent extends Component {
  getSuperHeroes(){
    const {superheroes} = this.props
    return superheroes.map((heroes,key)=>{
      return <div key={key}>{heroes.superhero}</div>
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.getSuperHeroes()}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {superheroes: state.superheroesP}
}

export default connect(mapStateToProps)(SHComponent);
