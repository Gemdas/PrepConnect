 import React, { Component } from 'react';
 import { RecRow } from "../../Components/Connections";
 import "./connection.css";
 import SubmitBtn from "../../Components/SubmitBtn";

 // ajax call to grab matched applications

 class ConnectionsRecruiter extends Component {
 	render () {
 		return (
 			<div className="ConnectionsRecruiter content-wrapper">
	 			<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">Applicant Name</th>
				      <th scope="col">Job Title</th>
				      <th scope="col">Company</th>
				      <th scope="col">Action</th>
				      <th scope="col">% Matched</th>
				      <th scope="col">Contact</th>
				      <th scope="col">Decline</th>
				    </tr>
				  </thead>
				  <tbody>
				    <RecRow jobTitle="title" company="company" matched={95} />
				  </tbody>
				</table>
			</div>
 		)
 	}
 }

 export default ConnectionsRecruiter;