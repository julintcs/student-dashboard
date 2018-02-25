const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

// config mongoose promises
mongoose.Promise = global.Promise;

// GET to /checksession
router.get('/checksession', (req, res) => {
	if (req.user) {
		return res.send(JSON.stringify(req.user));
	}
	return res.send(JSON.stringify({}));
});

// GET to logout
router.get('/logout', (req, res) => {
	req.logout();
	return res.send(JSON.stringify(req.user));
});

// POST to login
router.post('/login', async (req, res) => {
	// look up the user by their email 
	const query = User.findOne({ email: req.body.email });
	const foundUser = await query.exec();
	
	// if they exitst, they'll have a username, so add that to our body
	if (foundUser) { req.body.username = foundUser.username; }
	
	passport.authenticate('local')(req, res, () => {
		//if logged in, we should have user info sent back
		if (req.user) {
			return res.send(JSON.stringify(req.user));
		}
		
		// otherwise return an error
		return res.send(JSON.stringify({error: 'There was an error logging in' }));
	});
});

//POST to /register
router.post('/register', (req, res) => {
	//create a user object to save, using vals from incoming JSON
	const newUser = new User(req.body);
	
	//Save the user via Passport's "register" method
	User.register(newUser, req.body.password, (err, user) => {
		//if there's a problem, send back JSON with the error
		if (err) {
			return res.send(JSON.stringify({error: err}));
		}
		//otherwise send back a JSON with new user's info
		return res.send(JSON.stringify(user));
	});
});

module.exports = router;