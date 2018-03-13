import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import firebase from 'firebase';

import authen from '../../actions/isLoggedIn';

const renderLogin = () => <NavLink className="bg-inverse text-white" tag={Link} to="/account/login">Log In</NavLink>;

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.logOutClick = this.logOutClick.bind(this);
		this.renderGreeting = this.renderGreeting.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		
		this.state = {
			isOpen: false,
		};
	}
	
	logOutClick(e) {
		e.preventDefault();
		const { logUserOut } = this.props;
		//logUserOut();
		
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  authen.isLoggedIn = false;

}).catch(function(error) {
  // An error happened.
});		
	}
	
	renderGreeting(name) {
		return (
			<span>
				Welcome, {name} | <a href="/logout" onClick={this.logOutClick}>Log out</a>
			</span>
		);
	}
	
	toggleNavbar() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	
	render() {
		//const { isLoggedIn, username } = this.props.authentication;
		return (
		
      <div className="Header">
        <header className="App-header">
				<Navbar light toggleable>
					<NavbarToggler right onClick={this.toggleNavbar} />
					<NavbarBrand className="bg-inverse text-white" tag={Link} to="/">Student dashboard</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem className="bg-inverse text-white">
								{ authen.isLoggedIn ? this.renderGreeting(this.state.email) : renderLogin() }
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
        </header>
	  </div>
			
		);
	}
}


