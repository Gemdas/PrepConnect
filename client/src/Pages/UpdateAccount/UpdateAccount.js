import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import Radio from "../../Components/Slider";
import SubmitBtn from "../../Components/SubmitBtn";
import "./UpdateAccount.css";
import axios from 'axios';

// This page holds the Update Account Page

// save button to update their information and skills in the db 


export default withAuth(class UpdateAccount extends Component {

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
		github: "",
		linkedin: "",
		portfolio: "",
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
		axios.get("api/user/" + user.picture).then((response)=>{
            console.log(response.data)
        });
		 
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

	handleInputChange = event => {
		const { value, name } = event.target;
		let tempObj=this.state;
		tempObj.skills[name]=value;

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
				competency: this.state.skills[key]
			})
			console.log(this.state.skills)
		}
		const data={
			github: this.state.github,
			linkedin: this.state.linkedin, 
			portfolio: this.state.portfolio,
			codeAbility
		}
		axios.put("api/user/" + this.state.user.picture, data).then((response)=>{
            console.log(response.data)
        });

		console.log(data)
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
							    <label htmlFor="github">GitHub Link</label>
							    <input type="url" className="form-control" onChange={this.handleContactChange} id="github" aria-describedby="emailHelp" placeholder="https://github.com/" value={this.state.github} />
							</div>
							<div className="form-group">
							    <label htmlFor="linkedin">LinkedIn</label>
							    <input type="url" className="form-control" onChange={this.handleContactChange} id="linkedin" aria-describedby="emailHelp" placeholder="https://www.linkedin.com/in/" value={this.state.linkedin} />
							</div>
							<div className="form-group">
							    <label htmlFor="porfolio">Portfolio</label>
							    <input type="url" className="form-control" onChange={this.handleContactChange} id="portfolio" aria-describedby="emailHelp" placeholder="Enter Portfolio" value={this.state.portfolio} />
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
})


