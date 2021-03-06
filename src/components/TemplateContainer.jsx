import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Template from './Template';
import { sessionCheckFailure, sessionCheckSuccess } from '../actions/authentication';
import firebase from 'firebase';

class TemplateContainer extends React.Component {
	constructor(props) {
		super(props);
		
		// bound fns
		this.checkSession = this.checkSession.bind(this);
	}
	
	componentWillMount() {
		// Before component mounts, check for existing user session
		this.checkSession();
	}
	
	async checkSession() {
		const { sessionCheckFailureAction, sessionCheckSuccessAction } = this.props;
		
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
			// User is signed in.
			sessionCheckSuccessAction();
		  }
		  else
		  {
			sessionCheckFailureAction();
		  }
		});
		/*
		// contact the API
		await fetch(
			// where to contact
			'/api/authentication/checksession',
			// what to send
			{
				method: 'GET',
				credentials: 'same-origin',
			},
		)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			}
			return null;
		})
		.then((json) => {
			if (json.username) {
				sessionCheckSuccessAction(json);
			} else {
				sessionCheckFailureAction();
			}
		})
		.catch((error) => {
			sessionCheckFailureAction(error);
		});
		*/
	}
	
	render() {
		const { authentication, progress } = this.props;
		return (
			<Template progress={progress} authentication={authentication} />
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		sessionCheckFailureAction: sessionCheckFailure,
		sessionCheckSuccessAction: sessionCheckSuccess,
	}, dispatch);
}

function mapStateToProps(state) {
	return {
		progress: state.progress,
		authentication: state.authentication,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
