 import React, { Component } from 'react';
 import { withAuth } from '@okta/okta-react';
 import "./Prep.css";
 import PrepQuestion from "../../Components/PrepQuestion";
 import Application from "../Application";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 // Props needed: Table Headers for Recruiters and Job Seekers


 export default withAuth(class Prep extends Component {
 	constructor(props){
		super(props)

		this.state = {
			input: '',
			authenticated: null,
			user: null
		}
		this.checkAuthentication = this.checkAuthentication.bind(this);
		this.getCurrentUser = this.getCurrentUser.bind(this);
		this.checkAuthentication();
	};

	  async getCurrentUser(){
		this.props.auth.getUser()
		  .then(user => this.setState({user}));
	  }
	
	  async checkAuthentication() {
		const authenticated = await this.props.auth.isAuthenticated();
		if (authenticated !== this.state.authenticated) {
		  this.setState({ authenticated });
		}
	  }

	  componentDidMount(){
		this.getCurrentUser();
	  }
	
	  componentDidUpdate() {
		this.checkAuthentication();
	  }
	  
 	render () {
 		if(!this.state.user) return null;
		if (this.state.authenticated === null) return null;
		const authNav = this.state.authenticated;
 		return (
 		<div>
 			<div className="row">
 				<div className="col-sm-3"></div>
 				<div className="col-sm-3">
	 				<div className="form-group">
					    <label htmlFor="prepTopic" className="topic prepDropdown">Topic</label>
					    <select className="form-control studyTopics" id="prepTopic">
					    	<option selected>Choose...</option>
					      <option id="htmlPrep" value="html">HTML</option>
					      <option id="cssPrep" value="css">CSS</option>
					      <option id="javascriptPrep" value="javascript">JavaScript</option>
					      <option id="jqueryPrep" value="jquery">jQuery</option>
					      <option id="mysqlPrep" value="mysql">MySQL</option>
					      <option id="mongodbPrep" value="mongodb">MongoDB</option>
					      <option id="reactPrep" value="react">React</option>
					    </select>
				 	</div>
			 	</div>
		 		<div className="col-sm-3">
		 			<div className="form-group">
					    <label htmlFor="studySkillLevel" className="studySkillLevel prepDropdown">Skill Level</label>
					    <select className="form-control skillLevels" id="studySkillLevel">
					      <option selected>Choose...</option>
					      <option id="beginner" value="1">Beginner</option>
					      <option id="intermediate" value="2">Intermediate</option>
					      <option id="advanced" value="3">Advanced</option>
					    </select>
					 </div>
		 		</div>
		 		<div className="col-sm-3"></div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<PrepQuestion question="example question" topAnswer="top answer example.." questionId="1"/>
				</div>
				<Application />
			</div>
		</div>
 		)
 	}
 })
