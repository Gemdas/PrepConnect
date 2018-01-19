 import React, { Component } from 'react';
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
				    <tr>
				      <th scope="row">props.username</th>
				      <td>props.jobTitle</td>
				      <td>props.company</td>
				      <td><button className="btn btn-primary tableBtn">props.action</button></td>
				      <td>props.%matched</td>
				      <td><button className="btn btn-success tableBtn" hfref="mailto:props.userEmail">Contact</button></td>
				      <td><button className="btn btn-danger tableBtn">Decline</button></td>
				    </tr>
				  </tbody>
				</table>
			</div>
 		)
 	}
 }

 export default ConnectionsRecruiter;