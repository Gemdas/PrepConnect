import React, { Component } from 'react';
import Typewriter from "../Typewriter";
import "./WelcomeScreen.css";


// update image color.. maybe.. lowest imporance

class WelcomeScreen extends Component {
	render () {
		return (

			<div className="jumbotron jumbotron-fluid welcome-wrapper">
				<div className="container-fluid welcome-wrapper">
					<img className="dash-logo" src="https://image.ibb.co/jKaSzG/pclogo.png" alt="pclogo" border="0" />
					<h1 className="display-4 welcome-head">Welcome to PrepConnect</h1>
					<Typewriter className="lead-text" text="Focus on skills, not a resume" />
				</div>
			</div>
		)
	}
}

export default WelcomeScreen;

