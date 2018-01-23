import React, { Component } from 'react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import "./UpdateAccount.css";

// This page holds the Update Account Page

// save button to update their information and skills in the db 


class UpdateAccount extends Component {

	state = {
		skills: {
			html: 0,
			css: 0,
			javascript: 0, 
			jquery: 0, 
			mysql: 0,
			mongodb: 0,
			react: 0
		},
		github: "",
		linkedin: "",
		portfolio: ""

	};

	handleInputChange = event => {
		const { value, name } = event.target;
		
		let tempObj=this.state;
		tempObj[name]=value;

		this.setState(tempObj);
	};

	handleContactChange = event => {
		const { value,id } = event.target;
		let contObj = this.state;
		contObj[id]=value;

		this.setState(contObj);
	};

	handleSubmit = event => {
		event.preventDefault();
		const codeAbility = [];
		for (let key in this.state.skills){
			codeAbility.push({
				language: key,
				competency: this.state[key]
			})
		}
		const data={
			github: this.state.github,
			linkedin: this.state.linkedin, 
			portfolio: this.state.portfolio,
			codeAbility
		}
		console.log(data)
	}
	
	render () {
		return (
			<div className="UpdateAccount content-wrap">
				<div className="col-sm-12">
					<div className="card">
			  			<form>
			  				<div className="form-group">
							    <label htmlFor="github">GitHub Link</label>
							    <input type="url" className="form-control" onChange={this.handleContactChange} id="github" aria-describedby="emailHelp" placeholder="https://github.com/" />
							</div>
							<div className="form-group">
							    <label htmlFor="linkedin">LinkedIn</label>
							    <input type="url" className="form-control" onChange={this.handleContactChange} id="linkedin" aria-describedby="emailHelp" placeholder="https://www.linkedin.com/in/" />
							</div>
							<div className="form-group">
							    <label htmlFor="porfolio">Portfolio</label>
							    <input type="url" className="form-control" onChange={this.handleContactChange} id="portfolio" aria-describedby="emailHelp" placeholder="Enter Portfolio" />
							</div>
			  			</form>
				  		<div className="card-body text-center">
				  			<p>Use the buttons below to accurately rate yourself.</p>
				  			<p>Keep in mind that recruiters are using this to match with for potential job openings.</p>
				  			
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
							<button type="submit" className="btn btn-sucess submitBtn" onClick={this.handleSubmit}>Update Account</button>
				  		</div>

				  		

		  			</div>
		  		</div>
			</div>
		)
	}
}

export default UpdateAccount;
