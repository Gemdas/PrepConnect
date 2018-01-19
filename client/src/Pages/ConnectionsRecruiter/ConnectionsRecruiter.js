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
				      <th scope="col">Job Title</th>
				      <th scope="col">Company</th>
				      <th scope="col">Status</th>
				      <th scope="col">Option</th>
				      <th scope="col">Contact</th>
				      <th scope="col">Decline</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">props</th>
				      <td>props</td>
				      <td>props</td>
				      <td>props</td>
				      <td><button className="btn btn-success tableBtn">Contact</button></td>
				      <td><button className="btn btn-danger tableBtn">Decline</button></td>
				    </tr>
				  </tbody>
				</table>
			</div>
 		)
 	}
 }

 export default ConnectionsRecruiter;