import React, { Component } from 'react';

// This page holds the Update Account Page
// Components needed: Slider and Submit Button

class UpdateAccount extends Component {
	render () {
		return (
			<div className="UpdateAccount wrapper">
				<div className="col-sm-8">
					<div className="card">
						<div className="card-header">
			    			<h1>Edit Profile</h1>
			  			</div>
			  			<form>
			  				<div className="form-group">
							    <label htmlFor="github">GitHub Link</label>
							    <input type="email" className="form-control" id="github" aria-describedby="emailHelp" placeholder="Enter GitHub" />
							</div>
							<div className="form-group">
							    <label htmlFor="linkedin">LinkedIn</label>
							    <input type="email" className="form-control" id="linkedin" aria-describedby="emailHelp" placeholder="Enter Email" />
							</div>
							<div className="form-group">
							    <label htmlFor="porfolio">Portfolio</label>
							    <input type="email" className="form-control" id="porfolio" aria-describedby="emailHelp" placeholder="Enter Portfolio" />
							</div>
			  			</form>
				  		<div className="card-body">
				  			<p>Use the sliders below to accurately rate yourself.  Keep in mind that recruiters are using this to match with for potential job openings.  Please answer as truthfully as possible.</p>
				  		</div>

				  		{/*Component Section*/}
				  		<h3>HTML Slider</h3>
				  		<h3>CSS Slider</h3>
				  		<h3>JavaScript Slider</h3>
				  		<h3>Submit Button</h3>

		  			</div>
		  		</div>
			</div>
		)
	}
}

export default UpdateAccount;