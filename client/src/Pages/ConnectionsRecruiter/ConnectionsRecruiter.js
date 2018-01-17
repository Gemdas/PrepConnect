import React, { Component } from 'react';

// This page holds the connections table for the recruiter
// Will need an AJAX Call to the database to pull props to populate table.

class ConnectionsRecruiter extends Component {
 	render () {
 		return (
 			<div className="ConnectionsRecruiter wrapper">
	 			<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">Job Title</th>
				      <th scope="col">Job Seeker</th>
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

 export default ConnectionsRecruiter;