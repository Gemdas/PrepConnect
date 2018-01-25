// ADD QUESTION OPTION FOR RECRUITERS

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import Autosuggest from "../../Components/Autosuggest";
import ValidateQuestion from "../../Components/ValidateQuestion";
import "./PostJob.css";
import axios from 'axios';

// This page holds the Update Account Page

// need validate buttons to open a text box for recruiters to submit their questions
// need to handle the submit, use Brennan's algorithm to match with job seekers
// onClick for validate button, opens up modal with ValidateQuestion component
// Have recruiter define their minimum % compatibility

export default withAuth(class PostJob extends Component {
	constructor(props){
		super(props);

		this.state = {
				skills: {
					html: 0,
					css: 0,
					javascript: 0, 
					jquery: 0, 
					mysql: 0,
					mongodb: 0,
					react: 0
				},
				skillsq: {
					"html-q": "",
					"css-q": "",
					"javascript-q": "",
					"jquery-q": "",
					"mysql-q":  "",
					"mongod-q": "",
					"react-q": ""
				},
				jobTitle: "",
				companyName: "",
				companyUrl: "",
				salary: "",
				compatibilityExpectation: 0,
				authenticated: null,
				user: null
			};
			this.checkAuthentication = this.checkAuthentication.bind(this);
				this.getCurrentUser = this.getCurrentUser.bind(this);
				this.checkAuthentication();
	}

	  async getCurrentUser(){
		this.props.auth.getUser()
		.then(user => {this.setState({user})
		})
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


	// handles skills object
	handleInputChange = event => {
		const { value, name } = event.target;
		
		let tempObj=this.state;

		tempObj.skills[name]=value;
		this.setState(tempObj);
		console.log("After tempObj" + this.state);
	};
	// handles job posting object
	handlePostInfo = event => {
		const { value, id } = event.target;
		let postObj = this.state;

		postObj[id]=value;
		this.setState(postObj);
	};
	 // handles question change
	handleQuestionChange = event => {
		const { value, id } = event.target;
		let qObj = this.state
		console.log(qObj);

		qObj.skillsq[id]=value;
		this.setState(qObj);
		console.log(value, id);
	};
	// handles submit button
	handleSubmit = event => {
		event.preventDefault();
		const codeRequirements = [];
		const questions = [];


		for (let key in this.state.skills){
			codeRequirements.push({
				language: key,
				competency: this.state.skills[key]
			})
		}

		for (let key in this.state.skillsq) {
			if(this.state.skillsq[key]!==""){
				questions.push({
					type: key,
					question: this.state.skillsq[key]
				})
			}
		}
		const data ={
			jobTitle: this.state.jobTitle,
			companyName: this.state.companyName,
			companyUrl: this.state.companyUrl,
			salary: this.state.salary,
			compatibilityExpectation: this.state.compatibilityExpectation,
			recruiterId:this.state.user.picture,
			codeRequirements,
			questions
		}
		axios.post("api/posting/", data).then((response)=>{
            console.log(response.data)
        });
	}

	render () {
		if(!this.state.user) return null;
		if (this.state.authenticated === null) return null;
		const authNav = this.state.authenticated;
		return (
			<div className="UpdateAccount content-wrap">
				<div className="col-sm-12">
					<div className="card">
			  			<form>
			  				<div className="form-group">
							    <label htmlFor="jobtitle">Job Title</label>
							    <input type="text" className="form-control" id="jobTitle" onChange={this.handlePostInfo} aria-describedby="emailHelp" />
							</div>
							<div className="form-group">
							    <label htmlFor="companyName">Company Name</label>
							    <input type="text" className="form-control" id="companyName" onChange={this.handlePostInfo} aria-describedby="emailHelp" />
							</div>
							<div className="form-group">
							    <label htmlFor="companyURL">Company URL</label>
							    <input type="url" className="form-control" id="companyUrl" onChange={this.handlePostInfo} aria-describedby="emailHelp"/>
							</div>
							<div className="form-group">
							    <label htmlFor="salary">Salary</label>
							    <input type="text" className="form-control" onChange={this.handlePostInfo} id="salary" aria-describedby="emailHelp" />
							</div>
							<div className="form-group">
							    <label htmlFor="salary">Minimum Compatibility Desired</label>
							    <input type="number" className="form-control" onChange={this.handlePostInfo} id="compatibility" aria-describedby="emailHelp" />
							</div>
			  			</form>
				  		<div className="card-body text-center">
				  			<p>Use the buttons below to list the skills and level required for your job posting.</p>
				  			
							<form className="skill">
								<div className="input-group form-group skill-q" id="html">
									<h2>HTML</h2>
									<label className="radio-inline"><input type="radio" name="html" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="html" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="html" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>									
									<label className="radio-inline"><input type="radio" name="html" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="html-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="css">
									<h2>CSS</h2>
									<label className="radio-inline"><input type="radio" name="css" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="css" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="css" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="css" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="css-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="javascript">
									<h2>JavaScript</h2>
									<label className="radio-inline"><input type="radio" name="javascript" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="javascript" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="javascript" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="javascript" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="javaS-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="jquery">
									<h2>jQuery</h2>
									<label className="radio-inline"><input type="radio" name="jquery" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="jquery" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="jquery" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="jquery" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="jquery-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="mysql">
									<h2>MySQL</h2>
									<label className="radio-inline"><input type="radio" name="mysql" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="mysql" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="mysql" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="mysql" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="sql-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="mongodb">
									<h2>MongoDB</h2>
									<label className="radio-inline"><input type="radio" name="mongodb" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="mongodb" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="mongodb" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="mongodb" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="mongo-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="react">
									<h2>React</h2>
									<label className="radio-inline"><input type="radio" name="react" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="react" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="react" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="react" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
									<ValidateQuestion label="Question" id="react-q" question={this.handleQuestionChange} />
								</div>
							</form>
							<button type="submit" className="btn btn-sucess submitBtn" onClick={this.handleSubmit}>Post Job</button>
				  		</div>

				  		

		  			</div>
		  		</div>
			</div>
		)
	}
})
