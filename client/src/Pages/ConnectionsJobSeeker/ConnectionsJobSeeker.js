 import React, { Component } from 'react';
 import { JsRow } from "../../Components/Connections";
 import "./connection.css";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 
 // Props needed: Table Headers for Recruiters and Job Seekers
 // ajax call to grab matched job postings

 // application (either begin or review)

 class ConnectionsJobSeeker extends Component {


 	render () {
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
 }

 export default ConnectionsJobSeeker;