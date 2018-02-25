import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const renderLogin = () => <NavLink tag={Link} to="/account/login">Log In</NavLink>;

export default class Footer extends React.Component {
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
		logUserOut();
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
		const { isLoggedIn, username } = this.props.authentication;
		return (
	  <div className="App">
	    <footer className="App-header">
			&copy;TCS interns 2018
		</footer>
	  </div>
		);
	}
}


