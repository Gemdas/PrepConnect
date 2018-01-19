 import React, { Component } from 'react';
 import "./connection.css";

 // This page holds the table that shows each job seeker/recruiter their "matches" based on survey score
 // Props needed: Table Headers for Recruiters and Job Seekers
 // Buttons for taking or declining interview

 class ConnectionsJobSeeker extends Component {
 	render () {
 		return (
 			<div className="ConnectionsJobSeeker content-wrapper">
	 			<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">Job Title</th>
				      <th scope="col">Company</th>
				      <th scope="col">Status</th>
				      <th scope="col">Option</th>
				      <th scope="col">Decline</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>props</td>
				      <td>props</td>
				      <td>props</td>
				      <td>props</td>
				    </tr>
				  </tbody>
				</table>
			</div>
 		)
 	}
 }

 export default ConnectionsJobSeeker;