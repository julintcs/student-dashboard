import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderContainer from './shared/HeaderContainer';
import FooterContainer from './shared/FooterContainer';
import HomePage from './home/HomePageContainer';
import LoginPage from './account/LoginPageContainer';
import ProfilePage from './account/ProfilePage';

export default function Template(props) {
	const { authentication, progress } = props;
	return (
		<Router>
			<div className="wrapper">
				<HeaderContainer authentication={authentication} />
				<section className="h-50 trying">
					<Route exact path="/" component={HomePage} />
					<Route exact path="/account/login" component={LoginPage} />
					<Route path="/account/profile/:id" component={ProfilePage} />
				</section>
				<div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display : 'none' }}>
					<div className="loader-box">
						<div className="loader">Loading...</div>
					</div>
				</div>
				<FooterContainer authentication={authentication} />
			</div>
		</Router>
	);
}
