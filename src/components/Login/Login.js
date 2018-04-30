import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, green400, fullWhite} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import '../../App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { GoogleLogin } from 'react-google-login';


import apiService from '../../lib/apiService/apiService';
import Auth from '../../lib/Auth/Auth';

const stylesCheck = {
		block: {
				maxWidth: 250
		},
		checkbox: {
				top: '42px',
				width: 'auto',
				marginBottom: 16
		}
};
const iconStyles = {
		marginRight: 24
};

const buttonStyles = {
		position: 'absolute',
		right: '10px'
}
const buttonStyles2 = {
		position: 'absolute',
		right: '7em'
}

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {
		constructor(props) {
				super(props)
				this.state = {
						username: "",
						password: "",
						authenticated: false
				}
		}

		handleUsernameChange(e) {
				this.setState({username: e.target.value});
		}

		handlePasswordChange(e) {
				this.setState({password: e.target.value});
		}

		login = (e) => {
			e.preventDefault();
				apiService('POST', '/login', {
						email: this.state.username,
						password: this.state.password
				}).then((res) => {
					if(res.status === 400 || res.status === 401 || res.status === 500){
						console.log('Error: ',res.message)
					}else{
						localStorage.setItem('token', res.data.token)
						localStorage.setItem('userId', res.data.userId)
						localStorage.setItem('userMail', res.data.email)
						localStorage.setItem('userName', res.data.name)
						localStorage.setItem('userRolId', res.data.rol_id)
						this.setState({authenticated:Auth()})
					}
				})
					.catch(function (reason) {
							console.error(reason);
					});
		}
		


		render() {
			console.log('state',this.state)
				return (
						<div>
						{Auth() ? <Redirect to= {{pathname:'/list'}}/> : (
								<form onSubmit={this.login}>

										<Card
												style={{
												width: '350px',
												height: '310px',
												display: 'block',
												marginRight: 'auto',
												marginLeft: 'auto',
												marginTop: '10%'
										}}>
												<CardHeader
														style={{
														backgroundColor: '#66BB6A'
												}}
														title="Basic Login"
														titleColor={fullWhite}/>
												<CardActions style={{
														padding: '15px'
												}}>
														<FontIcon className="material-icons"  hoverColor={green400}>account_circle
																<TextField
																		floatingLabelFocusStyle={{
																		color: '#66BB6A'
																}}
																		underlineFocusStyle={{
																		borderColor: '#66BB6A'
																}}
																		style={{
																		paddingLeft: '0.5em'
																}}
																		hintText="Username"
																		value={this.state.username}
																		onChange={this.handleUsernameChange.bind(this)}
																		floatingLabelText="Username"/>
														</FontIcon>
														<FontIcon className="material-icons"  hoverColor={green400}>lock
																<TextField
																		floatingLabelFocusStyle={{
																		color: '#66BB6A'
																}}
																		underlineFocusStyle={{
																		borderColor: '#66BB6A'
																}}
																		style={{
																		paddingLeft: '0.5em'
																}}
																		hintText="Password Field"
																		value={this.state.password}
																		onChange={this.handlePasswordChange.bind(this)}
																		floatingLabelText="Password"
																		type="password"/>
														</FontIcon>
														<br/>
														<RaisedButton
																label="Login"
																type="submit"
																
																labelColor={fullWhite}
																backgroundColor='#66BB6A'/>
														<RaisedButton
																label="Register"
																
																labelColor={fullWhite}
																backgroundColor='#66BB6A'/>
												</CardActions>
												<GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
										</Card>

								</form>
								
						)}
				</div>
				)
		}
}

export default Login
