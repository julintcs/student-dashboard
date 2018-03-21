import React from 'react';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';
import { loginAttempt, loginSuccess, loginFailure } from '../../actions/authentication';

import LoginPage from './LoginPage';

export class LoginPageContainer extends React.Component {
	constructor(props) {
		super(props);
		
		// bound fns
		this.attemptLogIn = this.attemptLogIn.bind(this);
		
		// component state
		this.state = {
			redirect: false,
		};
	}
	
	async attemptLogIn(userData) {
		const { 
			decrementProgressAction, 
			incrementProgressAction ,
			loginAttemptAction,
			loginFailureAction,
			loginSuccessAction,				
		} = this.props;
		
		// turn on spinner
		incrementProgressAction();
		
		// register that a login attempt is beind made
		loginAttemptAction();
		
		// contact login API
		firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
		.then(authUser => {
			//this.setState(() => ({ email: this.state.email, password: this.state.password, wrongcredentials: false }));

			console.log("signed in");
			
			loginSuccessAction();
			this.setState({ redirect: true });
		}).catch(function(error){
			console.log('sign in error');
		});
		
		// turn off spinner
		decrementProgressAction();
	}
	
	render() {
		const { redirect } = this.state;
		
		if (redirect) {
			return (
				<Redirect to="/" />
			);
		}
		
		return (
			<div>
				<LoginPage loginFunction={this.attemptLogIn} />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		incrementProgressAction: incrementProgress,
		decrementProgressAction: decrementProgress,
		loginAttemptAction: loginAttempt,
		loginFailureAction: loginFailure,
		loginSuccessAction: loginSuccess,
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPageContainer);