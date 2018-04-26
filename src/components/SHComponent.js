import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchData} from '../actions/action'

class SHComponent extends Component {

  componentWillMount(){
    this.props.fetchData()
  }

  getApiService(){
    
    const {dataInf} = this.props
    return dataInf.data.map((data,key)=>{
      console.log(data)
      return <div key={key}>{data.title}</div>
    })
  }
  render() {
    
    console.log(this.props)
    return (
      <div>
        {this.props.dataInf.isFetching && <div>Loading...</div>}
        {
          this.props.dataInf.data.length ?
            this.getApiService()
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {dataInf: state.dataReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SHComponent);
