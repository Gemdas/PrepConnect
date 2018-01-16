import React, { Component } from 'react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import Autosuggest from "../../Components/Autosuggest";
import "./PostJob.css";

// This page holds the Update Account Page
// Components needed: Slider and Submit Button

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
							<Radio skill="HTML" />
					  		<Radio skill="CSS" />
					  		<Radio skill="JavaScript" />
					  		<Radio skill="jQuery" />
					  		<Radio skill="MySQL" />
					  		<Radio skill="MongoDB" />
					  		<Radio skill="React" />
					  		<SubmitBtn label="Submit" />`
				  		</div>

				  		

		  			</div>
		  		</div>
			</div>
		)
	}
}

export default PostJob;