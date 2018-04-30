import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'

const isAutheticated = ()=>{
    const token = localStorage.getItem('token');
    if(token){
        return true;
    }else{
        console.log('Without Authorization')
        return false
    }
}
export default isAutheticated;