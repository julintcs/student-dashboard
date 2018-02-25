import React from 'react';
import { Button } from 'reactstrap';

import Sidebar from '../shared/Sidebar';

export default function HomePage(props) {
	const { decrementFunction, incrementFunction } = props;
	return (
		<div className="row justify-content-center">
			<div className="col-md-8 ContentCustom">
				<h1>Welcome to student dashboard!</h1>
			</div>
			<Sidebar />
		</div>
	);
}
