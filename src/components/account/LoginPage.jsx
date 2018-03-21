import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from 'firebase';


export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		
		// bound fns
		this.compileFormData = this.compileFormData.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		
		// component state
		this.state = {
			email: '',
			password: '',
		};
	}
	
	// update state as email val changes
	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}
	
	// update state as password val changes
	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}
	
	compileFormData() {
		const { loginFunction } = this.props;
		const formData = this.state;
		//loginFunction(formData);
		
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(authUser => {
			this.setState(() => ({ email: this.state.email, password: this.state.password, wrongcredentials: false }));

			console.log("signed in");//+firebase.auth().currentUser.displayName);

		})
		.catch(error => {
			this.setState({ wrongcredentials: true} );
		});
	}

/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
*/	
	
	render() {
		return (
			<div className="loginpage row justify-content-center">
				<div className="col-10 col-sm-7 col-md-5 col-lg-4">
					<Form>
						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Enter email"
							value={this.state.email}
							onChange={this.handleEmailChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="Enter password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
							/>
						</FormGroup>
						<Button onClick={this.compileFormData}>Log in</Button>
					</Form>
				</div>
			</div>
		);
	}
}