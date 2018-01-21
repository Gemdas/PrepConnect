// ADD QUESTION OPTION FOR RECRUITERS

import React, { Component } from 'react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import Autosuggest from "../../Components/Autosuggest";
import ValidateQuestion from "../../Components/ValidateQuestion";
import "./PostJob.css";

// This page holds the Update Account Page

// need validate buttons to open a text box for recruiters to submit their questions
// need to handle the submit, use Brennan's algorithm to match with job seekers
// onClick for validate button, opens up modal with ValidateQuestion component
// Have recruiter define their minimum % compatibility

class PostJob extends Component {

	state = {
		html: 0,
		css: 0,
		javascript: 0, 
		jquery: 0, 
		mysql: 0,
		mongodb: 0,
		react: 0
	};

	handleInputChange = event => {
		const { value, name } = event.target;
		console.log(event.target.name);
		console.log("Before tempObj" + this.state);
		let tempObj=this.state;
		tempObj[name]=value;
		this.setState(tempObj);
		console.log("After tempObj" + this.state);
	};

	handleSubmit = event => {
		event.preventDefault();
		const skillsArray = [];
		for (let key in this.state){
			skillsArray.push({
				language: key,
				competency: this.state[key]
			})
		}
	}

	render () {
		
		return (
			<div className="UpdateAccount content-wrap">
				<div className="col-sm-12">
					<div className="card">
			  			<form>
			  				<div className="form-group">
							    <label htmlFor="jobtitle">Job Title</label>
							    <Autosuggest className="form-control" />
							    </div>
							<div className="form-group">
							    <label htmlFor="companyName">Company Name</label>
							    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" />
							</div>
							<div className="form-group">
							    <label htmlFor="companyURL">Company URL</label>
							    <input type="url" className="form-control" id="companyURL" aria-describedby="emailHelp"/>
							</div>
							<div className="form-group">
							    <label htmlFor="salary">Salary</label>
							    <input type="text" className="form-control" id="salary" value="$" aria-describedby="emailHelp" />
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
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="css">
									<h2>CSS</h2>
									<label className="radio-inline"><input type="radio" name="css" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="css" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="css" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="css" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="javascript">
									<h2>JavaScript</h2>
									<label className="radio-inline"><input type="radio" name="javascript" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="javascript" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="javascript" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="javascript" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="jquery">
									<h2>jQuery</h2>
									<label className="radio-inline"><input type="radio" name="jquery" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="jquery" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="jquery" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="jquery" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="mysql">
									<h2>MySQL</h2>
									<label className="radio-inline"><input type="radio" name="mysql" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="mysql" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="mysql" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="mysql" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="mongodb">
									<h2>MongoDB</h2>
									<label className="radio-inline"><input type="radio" name="mongodb" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="mongodb" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="mongodb" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="mongodb" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
								</div>
							</form>
							<form>
								<div className="input-group form-group skill-q" id="react">
									<h2>React</h2>
									<label className="radio-inline"><input type="radio" name="react" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
									<label className="radio-inline"><input type="radio" name="react" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
									<label className="radio-inline"><input type="radio" name="react" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
									<label className="radio-inline"><input type="radio" name="react" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
								</div>
							</form>
							<button type="submit" className="btn btn-sucess submitBtn" onClick={this.handleSubmit}>Post Job</button>
				  		</div>

				  		

		  			</div>
		  		</div>
			</div>
		)
	}
}

export default PostJob;