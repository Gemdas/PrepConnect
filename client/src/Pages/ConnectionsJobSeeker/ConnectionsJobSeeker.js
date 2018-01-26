 import React, { Component } from 'react';
 import axios from 'axios';
 import { withAuth } from '@okta/okta-react';
 import { JsRow } from "../../Components/Connections";
 import "./connection.css";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 
 // Props needed: Table Headers for Recruiters and Job Seekers
 // ajax call to grab matched job postings

 // application (either begin or review)
 const compareArrays= (userArray, postArray)=>{
 	let count = 0;
 	let difference = 0;
 	postArray.forEach((value, index)=>{
 		if(parseInt(value.competency)<1){
 			return;
 		}
 		const userValue= parseInt(userArray.find(element=>{return element.language===value.language}).competency)
 		difference+=(parseInt(value.competency)-userValue)/parseInt(value.competency)*100
 		count++;
 	})
 	return parseInt(100-difference/count);
 }

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
 		.then(user => {
 			axios.get("api/user/" + user.picture).then((response)=>{
 				console.log(response);
 				this.setState({
 					user,
 					github: response.data.github,
 					portfolio: response.data.porfolio,
 					linkedin: response.data.linkedin,
 					codeAbility: response.data.codeAbility
 				})
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
 		axios.get("api/posting/").then((response)=>{
 			console.log(response.data)
 			this.setState({postings:response.data})
 		});
 	}

 	componentDidUpdate() {
 		this.checkAuthentication();
 	}



 	render () {
 		console.log(this.state);
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
 			{this.state.postings.map((posting)=>{
 				const score=compareArrays(this.state.codeAbility, posting.codeRequirements)
 				if(posting.compatibilityExpectation>score){
 					return null;
 				}
 				return(<JsRow jobTitle={posting.jobTitle} 
 					salary={posting.salary} 
 					questions={posting.questions}
 					company={posting.companyName}
 					matched={score}
 					companyUrl={posting.companyUrl}
 					recruiterId= {posting.recruiterId}
 					applicant= {this.state.user.name}
 					email= {this.state.user.email}
 					github= {this.state.github}
 					linkedin= {this.state.linkedin}
 					portfolio= {this.state.portfolio}
 					/>)
 			})}
 			</tbody>
 			</table>
 			</div>


 			)
 	}
 })

