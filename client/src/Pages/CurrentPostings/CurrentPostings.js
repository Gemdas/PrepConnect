 import React, { Component } from 'react';
 import "./CurrentPostings.css";
 import { JobRow } from "../../Components/Connections";
 import SubmitBtn from "../../Components/SubmitBtn";

 // ajax call to grab current and previous applications from recruiter id
 // action: repost or close 

 class CurrentPostings extends Component {
 	render () {
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
 }

 export default CurrentPostings;