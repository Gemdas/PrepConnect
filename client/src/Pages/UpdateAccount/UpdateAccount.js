import React, { Component } from 'react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import "./UpdateAccount.css";

// This page holds the Update Account Page
// Components needed: Slider and Submit Button

class UpdateAccount extends Component {
	render () {
		return (
			<div className="UpdateAccount content-wrap">
				<div className="col-sm-12">
					<div className="card">
			  			<form>
			  				<div className="form-group">
							    <label htmlFor="github">GitHub Link</label>
							    <input type="url" className="form-control" id="github" aria-describedby="emailHelp" placeholder="https://github.com/" />
							</div>
							<div className="form-group">
							    <label htmlFor="linkedin">LinkedIn</label>
							    <input type="url" className="form-control" id="linkedin" aria-describedby="emailHelp" placeholder="https://www.linkedin.com/in/" />
							</div>
							<div className="form-group">
							    <label htmlFor="porfolio">Portfolio</label>
							    <input type="url" className="form-control" id="porfolio" aria-describedby="emailHelp" placeholder="Enter Portfolio" />
							</div>
			  			</form>
				  		<div className="card-body text-center">
				  			<p>Use the buttons below to accurately rate yourself.</p>
				  			<p>Keep in mind that recruiters are using this to match with for potential job openings.</p>
				  			
				  			{/*Component Section*/}
							<Radio skill="HTML" />
					  		<Radio skill="CSS" />
					  		<Radio skill="JavaScript" />
					  		<Radio skill="jQuery" />
					  		<Radio skill="MySQL" />
					  		<Radio skill="MongoDB" />
					  		<Radio skill="React" />
					  		<SubmitBtn label="Save" />`
				  		</div>

				  		

		  			</div>
		  		</div>
			</div>
		)
	}
}

export default UpdateAccount;