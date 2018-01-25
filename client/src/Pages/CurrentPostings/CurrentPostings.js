 import React, { Component } from 'react';
 import { withAuth } from '@okta/okta-react';
 import "./CurrentPostings.css";
 import { JobRow } from "../../Components/Connections";
 import SubmitBtn from "../../Components/SubmitBtn";

 // ajax call to grab current and previous applications from recruiter id
 // action: repost or close 

 export default withAuth(class CurrentPostings extends Component {
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
 			<div className="CurrentPostings content-wrapper">
	 			<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">Job Title</th>
				      <th scope="col">Company</th>
				      <th scope="col"># of Matches</th>
				      <th scope="col">Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    <JobRow jobTitle="title" company="company" allMatches={15} />
				  </tbody>
				</table>
			</div>
 		)
 	}
 })

