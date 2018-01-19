import React, { Component } from 'react';
import AppQuestion from "../../Components/AppQuestion";

// questions from recruiter with editors for each
// submit button that grabs values for each editor 
// for each question in a job application, add an AppQuestion component


class Application extends Component {
	render () {
		return (
			<div>
				<AppQuestion question="sample question" language="html"/>
			</div>
		)
	}
}

export default Application;