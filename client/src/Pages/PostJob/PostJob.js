// ADD QUESTION OPTION FOR RECRUITERS

import React, { Component } from 'react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import Autosuggest from "../../Components/Autosuggest";
import "./PostJob.css";

// This page holds the Update Account Page

// need validate buttons to open a text box for recruiters to submit their questions
// need to handle the submit, use Brennan's algorithm to match with job seekers
// Have recruiter define their minimum % compatibility

class PostJob extends Component {
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
				  			
				  			{/*Component Section*/}
				  			<div>
				  				<Radio skill="HTML" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-html"/>
				  			</div>
				  			<div>
				  				<Radio skill="CSS" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-css"/>
				  			</div>
				  			<div>
				  				<Radio skill="JavaScript" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-javascript"/>
				  			</div>
				  			<div>
				  				<Radio skill="jQuery" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-jquery"/>
				  			</div>
				  			<div>
				  				<Radio skill="MySQL" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-mysql"/>
				  			</div>
				  			<div>
				  				<Radio skill="MongoDB" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-mongodb"/>
				  			</div>
				  			<div>
				  				<Radio skill="React" />
				  				<SubmitBtn label="Validate" className="validateBtn" onClick={this.handleAddValidatation} id="validate-react"/>
				  			</div>
					  		<SubmitBtn label="Submit" />`
				  		</div>

				  		

		  			</div>
		  		</div>
			</div>
		)
	}
}

export default PostJob;