 import React, { Component } from 'react';
 import { withAuth } from '@okta/okta-react';
 import { RecRow } from "../../Components/Connections";
 import "./connection.css";
 import SubmitBtn from "../../Components/SubmitBtn";
 import axios from 'axios';

 // ajax call to grab matched applications

 export default withAuth(class ConnectionsRecruiter extends Component {
 	constructor(props){
		super(props)

		this.state = {
			input: '',
			submissions:[], 
			authenticated: null,
			user: null
		}
		this.checkAuthentication = this.checkAuthentication.bind(this);
		this.getCurrentUser = this.getCurrentUser.bind(this);
		this.checkAuthentication();
	};

	  async getCurrentUser(){
		this.props.auth.getUser()
		  .then(user => {
 				axios.get("api/submission?recruiterId="+user.picture).then((response)=>{
            		console.log(response.data)
            		this.setState({
            			user: user,
            			submissions:response.data})
        });
 			});
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
 			<div className="ConnectionsRecruiter content-wrapper">
	 			<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">Applicant Name</th>
				      <th scope="col">Job Title</th>
				      <th scope="col">Company</th>
				      <th scope="col">Action</th>
				      <th scope="col">Contact</th>
				      <th scope="col">Decline</th>
				    </tr>
				  </thead>
				  <tbody>
				  	{this.state.submissions.map(submission=>{
				  		return(<RecRow jobTitle={submission.jobTitle}
				  			name={submission.applicant}
				  			company={submission.company}
				  			responses={submission.responses} 
				  			email={submission.email}
				  			id={submission._id}
				  			/>)
				  	})}
				  </tbody>
				</table>
			</div>
 		)
 	}
 })

