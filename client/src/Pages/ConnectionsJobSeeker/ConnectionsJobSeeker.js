 import React, { Component } from 'react';
 import { withAuth } from '@okta/okta-react';
 import { JsRow } from "../../Components/Connections";
 import "./connection.css";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 
 // Props needed: Table Headers for Recruiters and Job Seekers
 // ajax call to grab matched job postings

 // application (either begin or review)

 export default withAuth(class ConnectionsJobSeeker extends Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			authenticated: null,
 			user: null
 		};
 		this.checkAuthentication = this.checkAuthentication.bind(this);
		this.getCurrentUser = this.getCurrentUser.bind(this);
		this.checkAuthentication();
 	}

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
			<div className="ConnectionsJobSeeker content-wrapper">
	 			<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">Job Title</th>
				      <th scope="col">Job Salary</th>
				      <th scope="col">Company</th>
				      <th scope="col">% Matched</th>
				      <th scope="col">Apply</th>
				      <th scope="col">Decline</th>

				    </tr>
				  </thead>
				  <tbody>
				    <JsRow jobTitle="title" salary="$$" company="company" matched={100} />
				  </tbody>
				</table>
			</div>


 		)
 	}
 })

